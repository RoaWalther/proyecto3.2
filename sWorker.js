"use strict";

let version = "version 1";

self.addEventListener("install", (e)=>{
	console.log("servicio esta instalado");

	caches.open(version).then((cache)=>{
		cache.add("index.html").then((res)=>{
			console.log("informacion correcta")
		}).catch ((e)=>{
			console.log(e);
		})
	})
})

self.addEventListener("activate", (e)=>{
	caches.keys().then((key)=>{
		return Promise.all(
			key.map( (cache)=>{
				if (cache !== version) {
					console.log("cache antiguo eliminado");
					return caches.delete(cache);
				}
			})
		)
	})
})

//el evento fetch intersecta la peticion y respondemos el objeto para que 
//la pagina cargue cuando no hay internet.

self.addEventListener("fetch", (e)=>{
	console.log("intersectando una peticion");
	// e.respondWith( async ()=> {
	// 		const resCache = await caches.match(e.request);
	// 		if (resCache) {
	// 			return resCache;
	// 		}else {
	// 			return e.request;
	// 		}
	// 	}
	// )
})

self.addEventListener("message",(e)=>{
	console.log("se recibio en siguiente mensaje del navegador: ");
	console.log(e.data);
	e.source.postMessage("super bien y tu?.");
})


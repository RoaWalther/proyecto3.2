"use strict";
//Uso de Worker(): se ejecuta en segundo plano
const worker = new Worker("worker.js");
const buton =document.querySelector(".button").addEventListener("click", ()=> ejecutarBucle());
worker.addEventListener("message", (e)=>{
	console.log(e.data);
	worker.terminate();
})

const ejecutarBucle = ()=> {
	worker.postMessage("Se devuelve la respuesta");
}

caches.open("Primer-registro").then((cache) =>{
	// cache.add(index.html");
	cache.addAll(["codigo.js", "index.html","style.css"]);
	cache.keys().then((res)=>{
		console.log(res);
	})
});

if(navigator.serviceWorker){
	navigator.serviceWorker.register("sWorker.js");
}

navigator.serviceWorker.ready.then((res)=>{
	setTimeout(()=>{
        console.log(res.active)
        res.active.postMessage("hola como estas");
    },3000);
});

navigator.serviceWorker.addEventListener("message",(e)=>{
	console.log("Mensaje enviado del serviceWorker: ");
	console.log(e.data);
});

//cookie
const newFechas = (dias)=>{
	let fecha = new Date();
	fecha.setTime(fecha.getTime()+ dias*1000*60*60*24);
	return fecha.toUTCString();
}

const crearCookies = (name,exp)=>{
	let expires =newFechas(exp);
	document.cookie = `${name}; expires = ${expires}`;
}

crearCookies("usuario=Walther",1);

const obtenerCookies = (nameCookie)=>{
	let cookies = document.cookie;
	cookies = cookies.split(";");
	for (let i = 0; i < cookies.length; i++) {
		document.cookie = cookies[i].trim();
		if (document.cookie.startsWith(nameCookie)) {
			return document.cookie.split('=')[1];
		}
	}
	return "no existe cokie"
}





























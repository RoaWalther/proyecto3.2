"use strict"


const newFecha = (dias)=>{
	let fecha = new Date();
	fecha.setTime(fecha.getTime()+ dias*1000*60*60*24);
	return fecha.toUTCString();
}

//creamos una cookie
const crearCookie = (name,exp)=>{
	let expires =newFecha(exp);
	document.cookie = `${name}; expires = ${expires}`;
}

const obtenerCookie = (nameCookie)=>{
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

if (obtenerCookie("acceptedCookies") !== "si") {
	setTimeout(()=>{
		document.querySelector(".bg-modal").style.zIndex ="10";
		document.querySelector(".bg-modal").style.opacity ="1";
		document.getElementById("accept").addEventListener("click", ()=>{
			crearCookie("acceptedCookies=si", 30);
			document.querySelector(".bg-modal").style.opacity ="0";
			setTimeout(()=>{
				document.querySelector(".bg-modal").style.zIndex ="-1";
			},1000);
		})
		document.getElementById("deny").addEventListener("click", ()=>{
			crearCookie("acceptedCookies=no", 30);
			document.querySelector(".bg-modal").style.opacity ="0";
			setTimeout(()=>{
				document.querySelector(".bg-modal").style.zIndex ="-1";
			},1000);
			
		})
	},200);
}

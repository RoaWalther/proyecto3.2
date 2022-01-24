"use strict";

addEventListener("message",e =>{
	if (e.data.length > 4) {
		console.log(e.data);
		postMessage("SE envian los datos");
	}
});
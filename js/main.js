window.addEventListener("load", function(){
	var msj = document.getElementById("mensajes");
	msj.addEventListener("keypress", nuevoMsj);
	function nuevoMsj(e){
		if (e.keyCode==13 && msj.value.length!==0 && msj.value.trim()){
			var chat = document.getElementById("chat");

			var contenedor = document.createElement("div");
			contenedor.classList.add("w-message","w-message-out");
			chat.appendChild(contenedor);

			var contenedorHijo = document.createElement("div");
			contenedorHijo.classList.add("w-message-text","no-collapse");
			contenedor.appendChild(contenedorHijo);

			var texto = document.createElement("p");
			texto.textContent= msj.value;
			contenedorHijo.appendChild(texto);

			var ahora = new Date();
			var hora = ahora.getHours();
			var min = ahora.getMinutes();
			var tiempo = hora + ":" + min;
			var contenedorTiempo = document.createElement("div");
			contenedorTiempo.classList.add("time");
			contenedorTiempo.textContent = tiempo;
			contenedorHijo.appendChild(contenedorTiempo);

			msj.value="";
		}
	}

	var otrosChats = document.getElementsByClassName("chatNew");
	for(var i=0; i<otrosChats.length; i++){
		otrosChats[i].addEventListener("click",cambioChat);
	}
	function cambioChat(){
		var imagen = document.getElementById("img");
		var nuevaImg = this.firstElementChild.firstElementChild.getAttribute("src");
		imagen.src = nuevaImg;
		var titulo = document.getElementById("titulo");
		var nuevoTitle = this.firstElementChild.children[1].innerHTML;
		titulo.innerHTML = nuevoTitle;
	}
});

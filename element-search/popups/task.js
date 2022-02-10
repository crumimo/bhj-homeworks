const showFirstWindow = document.getElementById("modal_main");  
showFirstWindow.className = showFirstWindow.className + " modal_active";  

const closeAll = document.getElementsByClassName("modal__close modal__close_times");  


for (let i = 0; i < closeAll.length; i++) {  
	let closeWindow = closeAll.item(i);
	closeWindow.onclick = function() {  
	     modal_main.className = "modal";
	     modal_success.className = "modal";
    }
}

const button = document.getElementsByClassName("show-success");  
let buttonWindow = button.item(0);

const showSecondWindow = document.getElementById("modal_success");   

buttonWindow.onclick = function() {
	modal_success.className = modal_main.className + " modal_active";   
	showFirstWindow.className = "modal";
}

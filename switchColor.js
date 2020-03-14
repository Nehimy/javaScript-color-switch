/* Valores númericos de teclas en Js*/ 
/*
  escape 	27 
  left arrow 	37
  up arrow 	38
  right arrow 	39
  down arrow 	40   
*/

document.addEventListener('keydown', colorBlack);
function colorBlack(e){
	if(e.keyCode == '37'){
	  document.getElementById('cuadrado').style.background = 'black';

	}
}

window.addEventListener('keydown', colorGreen);
function colorGreen(e){
	if(e.keyCode == '39'){
	  document.getElementById('cuadrado').style.background = 'green';

	}
}

window.addEventListener('keydown', function(event){
	if(event.keyCode == '13'){  
		alert('key enter');
	}



});



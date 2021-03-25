


function Conversao(minuto) {

	var segundo;

	segundo = minuto*60;

	document.write(minuto + " minutos equivale a " + segundo + " segundos ");
}


var valor_minuto;

valor_minuto = window.prompt("Horário em minutos","Horário");

Conversao(valor_minuto);
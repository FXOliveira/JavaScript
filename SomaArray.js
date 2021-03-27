function Somar(vet,num) {

	var soma = 0;

	for (var i = 0; i < vet.length; i++ ) {

		if (vet[i] > num) {

			soma = soma + vet[i];
		}
	}

	return soma;
}

var myArray = [6,12,7,4,28];
var num = 5;

document.write(myArray + "<br><br>");
document.write("Soma Total dos valores maiores que " + num + " : " + Somar(myArray,num));


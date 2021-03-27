
/*PROGRAMA PARA OBTER O PRIMEIRO E ULTIMO VALOR DE UM ARRAY*/

/*PROGRAM FOR GETTING THE FIRST AND THE LAST ARRAY VALUES*/

function GetFirstValue(vet) {

	return vet[0];
}

function GetLastValue(vet) {

	return vet[vet.length - 1];

}

var myArray;

myArray = [2,4,6,8,10,12,14];


document.write(myArray + "<br><br>");

document.write("Primeiro Valor do Array : " +GetFirstValue(myArray) + "<br>");
document.write("Segundo Valor do Array : " +GetLastValue(myArray));


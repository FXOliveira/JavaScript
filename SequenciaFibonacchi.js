function Fibonacchi(tam) {

	var f1,f2;
	var prox;
	var sequencia = new Array(tam);
	var count = 2;

	f1 = 0;
	f2 = 1;

	sequencia[0] = f1;
	sequencia[1] = f2;

	while (count <= tam) {
		
		prox = f1 + f2;
		f1 = f2;
		f2 = prox;
		sequencia[count] = prox;

		count++;
	}

	return sequencia;
}

document.write(Fibonacchi(8));
function ConvertToDecimal(vet){
	let i=0;
	let j = 0;
  let soma = 0;

	for(j=vet.length-1;j>=0;j--){
		soma = soma + vet[j]*(2**i);
		i++;
	}

	return soma;
}


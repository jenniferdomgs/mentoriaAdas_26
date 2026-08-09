function maiorSeq(array) {
    let somaMax = array[0];
    let somaAtual = array[0];

    for (let i = 1; i < array.length; i++) {
        somaAtual = Math.max(array[i], somaAtual + array[i]);
        somaMax = Math.max(somaMax, somaAtual);
    }

    return somaMax;
}


console.log(maiorSeq([-2,1,-3,4,-1,2,1,-5,4]));


// Algoritmo de Kadane
// é uma técnica gulosa que percorre de 1 até n e a cada iteração guarda dois valores: a resposta máxima até i e o valor do intervalo de soma máxima terminando em i
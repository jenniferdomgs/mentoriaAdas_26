function Soma(array) { // creio que o reduce funciona com um for dentro (parecido com oq fiz na função Soma2) sendo assim, o metodo tem o mesmo desempenho mas só de chama-lo o desempenho pode ser pior apesar das duas escalerem igual (O(n))
    const soma = array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    return soma;
}

// tem um desempenho BOM mas não é ÓTIMO
function Soma2(array) { 
    let soma = 0;
    // executa n vezes (tamanho do array)
    for (const i of array) { // tava errando pq usei in ao invés de of
        soma += i;
    }
    return soma;
} 

// desempenho das 2 é "igual"
// desempenho O(n) - Tempo = Linear
// desempenho O(1) - Espaço = Constante

console.log(Soma([2, 4, 6, 8]))
console.log(Soma2([2, 4, 6, 8]))
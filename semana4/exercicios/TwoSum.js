function TwoSum(array, alvo) {
    const indices = [];
    
    for (const [i, valorI] of array.entries()) { // não conhecia o metodo entries q retorna pares
        for (const [j, valorJ] of array.entries()) {
            if (i !== j && valorI + valorJ === alvo) {
                indices.push(i, j);
                return indices; // para assim q acha o alvo
            }
        }
    }

    return indices;
}

// primeiro for = executa n vezes
// segundo for = executa n vezes
// n x n = O(n²) = desempenho quadrático

console.log(TwoSum([2,7,11,15], 9));



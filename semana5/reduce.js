function meuReduce(lista, callback, valorInicial) {
    let acumulador = valorInicial;

    for (let i = 0; i < lista.length; i++) {
        acumulador = callback(acumulador, lista[i]);
    }

    return acumulador;
}

const soma = meuReduce(
    [1,2,3,4],
    (acumulador,numero) => acumulador + numero , 0
);
console.log(soma); //10
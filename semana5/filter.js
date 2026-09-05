function meuFilter(lista, callback) {
    const resultado = [];

    for (let i = 0; i < lista.length; i++) {
        if (callback(lista[i])) {
            resultado.push(lista[i]);
        }
    }

    return resultado;
}

export { meuFilter };
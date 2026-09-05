function meuMap(lista, callback) {
    for (let i = 0; i < lista.length; i++) {
        lista[i] = callback(lista[i]);
    }

    return lista;
}

export { meuMap };
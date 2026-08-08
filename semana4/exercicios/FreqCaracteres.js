function ContCaracteres(palavra) {
    const cont = {};

    for (const letra of palavra) { // executa n vezes (tam do array)
        cont[letra] = (cont[letra] || 0) + 1;
    }

    return cont;
}

function ContCaracteresMap(palavra) {
    const cont = new Map();

    for (const letra of palavra) { // executa n vezes (tam do array)
        cont.set(letra, (cont.get(letra) || 0) + 1);
    }

    return cont;
} 

console.log(ContCaracteres('banana'));
console.log(ContCaracteresMap('banana'));


// undefined OR 0 em js = 0
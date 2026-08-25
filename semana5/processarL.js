// processador de listas

const dobrar = (num) => num * 2;
const triplicar = (num) => num * 3;
const elevarQuadrado = (num) => num ** 2;
const transformarString = (num) => String(num);
const isPar = (num) => num % 2 === 0;

const operacoes = {
    dobrar,
    triplicar,
    elevarQuadrado,
    transformarString,
    isPar
};

function processarLista(lista, callback) {
    const ans = [];

    for (let i = 0; i < lista.length; i++) {
        ans.push(callback(lista[i]));
    }

    console.log(ans);
    return ans;
}

const numeros = [1, 2, 3, 4];
processarLista(numeros, dobrar);
processarLista(numeros, triplicar);        
processarLista(numeros, elevarQuadrado);    
processarLista(numeros, transformarString);
processarLista(numeros, isPar);
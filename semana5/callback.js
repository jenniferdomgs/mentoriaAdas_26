// callback functions -> permite executar uma função depois de uma determinada ação
// uma função como argumento para outra função (e só é executada quando a principal terminar)

function executarOp(num1, num2, callback) {
    var ans = callback(num1, num2);
    console.log("Resultado: " + ans);
}

function soma(n1, n2) {
    return n1 + n2;
}

function subtracao(n1, n2) {
    return n1 - n2;
}

function multiplicacao(n1, n2) {
    return n1 * n2;
}

function divisao(n1, n2) {
    return n1 / n2;
}

function potenciacao(n1, n2) {
    return n1 ** n2;
}

executarOp(2, 4, soma);
executarOp(2, 4, subtracao);
executarOp(2, 4, multiplicacao);
executarOp(2, 4, divisao);
executarOp(2, 4, potenciacao);
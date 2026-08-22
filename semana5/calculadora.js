// calculadora inteligente que executa operações dinamicamente 
// desafio: permitir adicionar novas operações sem alterar a função principal

const soma = (n1, n2) => n1 + n2;
const subtracao = (n1, n2) => n1 - n2;
const multiplicacao = (n1, n2) => n1 * n2;
const divisao = (n1, n2) => n1 / n2;

const operacoes = {
    soma,
    subtracao,
    multiplicacao,
    divisao
};

function calculadora(num1, num2, callback) {
    var ans = callback(num1, num2);
    console.log("Resultado: " + ans);
}

calculadora(10, 5, operacoes.soma);
calculadora(10, 5, operacoes.subtracao);
calculadora(10, 5, operacoes.multiplicacao);
calculadora(10, 5, operacoes.divisao);
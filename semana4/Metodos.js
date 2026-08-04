// Métodos importantes Javascript

// Arrays

// map() transforma cada item e retorna um novo array (mantém tamanho)
const precos = [10, 15, 30];
const comDesconto = precos.map((preco) => preco * 0.9);
console.log(comDesconto);

// filter() seleciona itens que atendem uma condição e retorna novo array (tamanho igual ou menor)
const idade = [15, 20, 18, 11];
const deMaiores = idade.filter((idade) => idade >= 18);
console.log(deMaiores);

// reduce() reduz o array a um único valor
const valores = [5, 10, 30];
const total = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(total);

// find() retorna o primeiro item que satisfaz a condição ou "undefined" se não tem nenhum
const usuarios = [
    {id: 1, nome: "Jennifer"},
    {id:2, nome: "Karoline"},
];

const usuario = usuarios.find((r) => r.id === 2);
console.log(usuario);

// some() retorna true se pelo menos um item satisfaz tal condição
const notas = [7, 3, 10];
const temAprovado = notas.some((nota) => nota >= 7);
console.log(temAprovado);


// every() retorna true se todos satisfazem tal condição
const notas2 = [6, 7, 8, 9];
const todosAprovados = notas2.every((nota) => nota >= 6);
console.log(todosAprovados);

// sort() 
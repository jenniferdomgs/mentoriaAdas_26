// Estruturas de dados em Javascript

// Array -> lista ordenada de valores (indices a partir de 0); aceita duplicadas e mistura tipos.
// Uso: quando a ordem importa e se precisa de uma coleção do mesmo tipo ou de tipo diferente (lista de produtos, resultados de busca, histórico)
const frutas = ["Maçã", "Banana", false, 55, "Uva"];

// Objetos -> coleção de pares (chave, valor, ex.: nome: "Jennifer"); não ordenado.
// Uso: quando se quer representar uma entidade (como em classe por exemplo)
const Pessoa = {
    nome: "Jennifer",
    idade: 21,
    altura: 167,
    peso: 60,
};

// Map -> usa uma estrutura parecida com o obejto (chave, valor)
// Uso: quando as chaves não são strings, quando a ordem de inserção importa e quando precisa adicionar/remover muitos valores
const estoque = new Map();
estoque.set("maçã", 10);
estoque.set("banana", 5);
// tem .size e n precisa contar manualmente
console.log(estoque.size);

for (const [chave, valor] of estoque) {
    console.log(`{chave}: ${valor}`);
}

// Set -> coleção de valor único (não tem duplicatas), só o valor importa
// Uso: quando precisa garantir que não tenha duplicatas ou quando precisar confirmar se existe o valor
// Ex.: remover cópias, controlar valor já usado, verificar permissões
const idsUnicos = new Set([1, 2, 2, 3, 3, 3]);
console.log(idsUnicos);
console.log(idsUnicos.has(2)); // retorna booleano

idsUnicos.add(8);
idsUnicos.delete(1);

// Remover cópias de um array
const numeros = [1, 2, 2, 5, 4, 4];
console.log(numeros);
const semCopias = [...new Set(numeros)]; // ... serve para espelhar um array (não conhecia)
console.log(semCopias); 

// Strings -> seuquência imutável de caracteres (qualquer alteração uma nova string é gerada)
const frase = "Testando métodos";
console.log(frase.length);
console.log(frase.toLocaleUpperCase());


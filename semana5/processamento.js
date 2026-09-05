import { meuFilter } from "./filter.js";
import { meuMap } from "./map.js";

const produtos= [
    {nome: "Notebook", preco: 3500, estoque: 10},
    {nome: "Mouse", preco: 80, estoque: 50},
    {nome: "Monitor", preco: 1200, estoque: 8},
    {nome: "Teclado", preco: 150, estoque: 0}
];

const produtosEstoque = meuFilter(produtos, produto => produto.estoque > 0);

const produtosProcessados = meuMap(
    produtosEstoque,
    produto => ({
        nome: produto.nome,
        preco: produto.preco * 0.9
    })
)
    .sort((produtoA, produtoB) => produtoA.preco - produtoB.preco);

console.log(produtosProcessados);

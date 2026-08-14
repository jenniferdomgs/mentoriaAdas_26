// parte 1: diferença entre var, let e const

// var é global já let e const não (ficam presas dentro do bloco que são criadas)
// const é uada para atribuir um valor constante, não pode ser mudada
// var pode existir 2+ com o mesmo nome já let e const não

// exercício: refatorar código

const nome = "Jennifer";
const idade = 20;
const cidade = "Natal";

const tecnologias = ["JavaScript", "Python", "Java"];

function apresentarPessoa(nome, idade, cidade) {
    // isso é um template string
    const mensagem = `Olá! Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`;

    console.log(mensagem);
}

function adicionarTecnologia(tecnologia) {
    tecnologias.push(tecnologia);
}

function mostrarTecnologias() {
    for (const tec of tecnologias) {
        console.log("Tecnologia: " + tec);
    }
}

apresentarPessoa(nome, idade, cidade);

adicionarTecnologia("React");

mostrarTecnologias();
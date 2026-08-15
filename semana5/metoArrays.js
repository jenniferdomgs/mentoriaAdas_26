const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Lucas", nota: 6},
    { nome: "Maria", nota: 9},
    { nome: "Pedro", nota: 5}
]

const nomesAlunos = alunos.map((aluno) => aluno.nome);
console.log(nomesAlunos);

const aprovados = alunos.filter((aluno) => aluno.nota >= 6);
console.log(aprovados);

const somaNotas = alunos.reduce((soma, aluno) => soma + aluno.nota, 0);
const mediaTurma = somaNotas / alunos.length;
console.log(mediaTurma);

console.log(alunos.find((aluno) => aluno.nome === "Pedro"));
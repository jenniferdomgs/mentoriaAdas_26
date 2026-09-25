alunos = [
    {
        "nome": "Ana",
        "notas": [8, 9, 7]
    },
    {
        "nome": "Lucas",
        "notas": [5, 6, 4]
    },
    {
        "nome": "Maria",
        "notas": [10, 9, 10]
    }
]

def calcularMedia(lista, aluno):
    notas = 0
    for i in lista:
        if i["nome"] == aluno:
            cont = 0
            for j in i["notas"]:
                notas += j
                cont += 1
    return(notas // cont)

def verificarAprovacao(lista, aluno):
    ans = " "
    if(calcularMedia(lista, aluno) >= 7):
        ans = "Aprovado!"
    else:
        ans = "Reprovado!"
    return ans

# TESTES

print(calcularMedia(alunos, "Ana"))
print(verificarAprovacao(alunos, "Ana"))

print(calcularMedia(alunos, "Lucas"))
print(verificarAprovacao(alunos, "Lucas"))

print(calcularMedia(alunos, "Maria"))
print(verificarAprovacao(alunos, "Maria"))
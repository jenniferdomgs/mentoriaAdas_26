usuarios = [
    {
        "nome": "Ana",
        "idade": 22
    },
    {
        "nome": "Carlos",
        "idade": 17
    },
    {
        "nome": "Maria",
        "idade": 25
    }
]

def listarUsuarios(lista): 
    print("-- USUÁRIOS --")
    for i in lista:
        print(i)
    return

def buscarUsuario(lista, nome):
    print("-- BUSCA DE USUÁRIOS --")
    for i in lista:
        if i["nome"] == nome:
            print(i) 
    return

def listarMaiorIdade(lista):
    print("-- USUÁRIOS MAIORES DE IDADE --")
    for i in lista:
        if i["idade"] >= 18:
            print(i)
    return

def addUsuario(lista, novoUsuario):
    lista.append(novoUsuario)
    return("Usuário adicionado com sucesso!")

def removerUsuario(lista, nome):
    for i in lista:
        if i["nome"] == nome:
            lista.remove(i)
    return("Usuário removido com sucesso!")

# TESTES

listarUsuarios(usuarios)

buscarUsuario(usuarios, "Ana")

listarMaiorIdade(usuarios)

print(addUsuario(usuarios, ({
    "nome": "João",
    "idade": 30
})))

listarUsuarios(usuarios)

print(removerUsuario(usuarios, "Maria"))

listarUsuarios(usuarios)
import json


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

def cadastrarUsuario(nome, idade):
    novoUsuario = {"nome": nome, "idade": idade}
    usuarios.append(novoUsuario)
    return(novoUsuario)

print(json.dumps(cadastrarUsuario("jennifer", 21)))

def verificarMaioridade(nome):
    for i in usuarios:
        if i["nome"] == nome:
            if i["idade"] >= 18:
                return True
            else:
                return False

print(verificarMaioridade("jennifer"))

def calcularMulta(diasAtraso):
    if(diasAtraso <= 0):
        return("R$ 0")
    else:
        return(f"R$ {diasAtraso * 2}")

print(calcularMulta(0))
print(calcularMulta(10))
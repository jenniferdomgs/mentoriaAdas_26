livros = [
    {
        "titulo": "Dom Casmurro",
        "autor": "Machado de Assis",
        "disponivel": True
    },
    {
        "titulo": "O Hobbit",
        "autor": "J.R.R. Tolkien",
        "disponivel": False
    },
    {
        "titulo": "Todas as suas imperfeições",
        "autora": "Colleen Hoover",
        "disponivel": True
    },
    {
        "titulo": "O lado feio do amor",
        "autora": "Colleen Hoover",
        "disponivel": False
    },
    {
        "titulo": "Anne de Green Gables",
        "autora": "Lucy Maud Montgomery",
        "disponivel": True
    },
    {
        "titulo": "Anne de Avonlea",
        "autora": "Lucy Maud Montgomery",
        "disponivel": False
    },
    {
        "titulo": "Anne da Ilha",
        "autora": "Lucy Maud Montgomery",
        "disponivel": True
    },
    {
        "titulo": "A hora da estrela",
        "autora": "Clarice Lispector",
        "disponivel": True
    },
    {
        "titulo": "Eu e esse meu coração",
        "autora": "C.C. Hunter",
        "disponivel": False
    },
    {
        "titulo": "A mulher na janela",
        "autora": "A. J. Finn",
        "disponivel": True
    },
    {
        "titulo": "Entendendo algoritmos",
        "autora": "Aditya Y. Bhargava",
        "disponivel": False
    },
]

def listarLivros(lista):
    print("Todos os livros:")
    for i in lista:
        print("- " + i["titulo"])

def buscarLivro(titulo, lista):
    print("Encontrados:")
    encontrados = [i["titulo"] for i in lista if titulo in i["titulo"]]

    if encontrados:
        for livro in encontrados:
            print("- " + livro)
    else:
        print("Nenhum.")


# TESTES
listarLivros(livros)
buscarLivro("Anne", livros)
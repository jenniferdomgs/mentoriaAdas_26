const botao = document.querySelector('#botao');
const titulo = document.querySelector('#titulo');
const texto = document.querySelector('#texto');

botao.addEventListener('click', () => {
    titulo.textContent = 'O conteúdo foi alterado!';
    texto.textContent = 'O JavaScript pode modificar elementos e estilos de uma página por meio do DOM';
    document.body.classList.toggle('pagina-alterada');
});
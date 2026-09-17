const formulario = document.querySelector('#form-produto');
const campoProduto = document.querySelector('#produto');
const listaProdutos = document.querySelector('#lista-produtos');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nomeProduto = campoProduto.value.trim();
    if (!nomeProduto) {
        campoProduto.focus();
        return;
    }

    const item = document.createElement('li');
    const nome = document.createElement('span');
    nome.textContent = nomeProduto;

    const editar = document.createElement('button');
    editar.type = 'button';
    editar.textContent = 'Editar';
    editar.addEventListener('click', () => {
        const campoEdicao = document.createElement('input');
        campoEdicao.type = 'text';
        campoEdicao.value = nome.textContent;
        campoEdicao.setAttribute('aria-label', 'Editar nome do produto');

        const salvar = document.createElement('button');
        salvar.type = 'button';
        salvar.textContent = 'Salvar';
        salvar.addEventListener('click', () => {
            const novoNome = campoEdicao.value.trim();
            if (!novoNome) {
                campoEdicao.focus();
                return;
            }

            nome.textContent = novoNome;
            campoEdicao.replaceWith(nome);
            salvar.replaceWith(editar);
        });

        nome.replaceWith(campoEdicao);
        editar.replaceWith(salvar);
        campoEdicao.focus();
    });

    const remover = document.createElement('button');
    remover.type = 'button';
    remover.textContent = 'Remover';
    remover.addEventListener('click', () => {
        item.remove();
    });

    item.append(nome, editar, remover);
    listaProdutos.appendChild(item);
    formulario.reset();
    campoProduto.focus();
});

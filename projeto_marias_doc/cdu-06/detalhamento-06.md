# CDU 06. Dar feedback de serviço
 
- **Ator principal**: Usuária
- **Atores secundários**: Não possui
- **Resumo**: A usuária logada avalia o serviço do Marias por meio da tela "Avaliações", ao preencher o formulário "Quer contar a sua experiência?" com a nota em estrelas, o relato de como se sentiu, sugestões de melhoria (opcional) e se recomendaria o Marias, e clicar no botão "Enviar avaliação". A avaliação é registrada de forma anônima.
- **Pré-condição**: A usuária precisa estar logada no sistema (estar na tela "Home Logada").
- **Pós-Condição**: O sistema registra a avaliação de forma anônima e a insere na seção "Avaliações da comunidade", atualizando a nota média, o número de avaliações e o percentual de usuárias que recomendam o Marias. O sistema exibe uma mensagem de confirmação de envio para a usuária e limpa os campos do formulário.
  
## Fluxo Principal
| Ações do ator | Ações do sistema |
| :---: | :---: |
| 1 - Na "Home Logada" a usuária clica na opção "Avaliações" do menu de navegação. | |
| | 2 - O sistema exibe a tela "Avaliações" com a seção "O que as usuárias dizem" (nota média, total de avaliações, percentual de recomendação e avaliações da comunidade) e o formulário "Quer contar a sua experiência?". |
| 3 - A usuária preenche o formulário de avaliação informando a quantidade de estrelas ("Como você avalia a sua experiência?"), o relato ("Como você se sentiu usando o Marias?"), sugestões de melhoria em "O que podemos melhorar?" (opcional), seleciona uma opção em "Você recomendaria o Marias?" ("Sim, eu recomendaria para outras mulheres", "Não recomendaria no momento" ou "Prefiro não opinar ainda") e clica no botão "Enviar avaliação".  | |
| | 4 - O sistema valida os campos obrigatórios, registra a avaliação de forma anônima, atualiza a nota média, o total de avaliações e o percentual de recomendação, insere a nova avaliação na seção "Avaliações da comunidade" e exibe uma mensagem de confirmação de envio para a usuária. O sistema limpa os campos do formulário. |
 
## Fluxo Alternativo I - Campos obrigatórios não preenchidos
| Ações do ator | Ações do sistema |
| :---: | :---: |
| 3.1 - A usuária clica no botão "Enviar avaliação" sem preencher o campo "Como você se sentiu usando o Marias?" ou sem selecionar uma opção em "Você recomendaria o Marias?". | |
| | 3.2 - O sistema não registra a avaliação, destaca os campos obrigatórios (marcados com "*") que não foram preenchidos e exibe uma mensagem informando que é necessário preenchê-los para enviar a avaliação. |
| 3.3 - A usuária preenche os campos obrigatórios pendentes e clica novamente no botão "Enviar avaliação". | |
| | 3.4 - O sistema retorna ao passo 4 do Fluxo Principal. |
 
> Obs. as seções a seguir apenas serão utilizadas na segunda unidade do PDSWeb (segundo orientações do gerente do projeto).
 
## Diagrama de Interação (Sequência ou Comunicação)
 
> Substituir pela imagem correspondente...
 
## Diagrama de Classes de Projeto
 
> Substituir pela imagem contendo as classes (modelo, visão e templates) que implementam o respectivo CDU...
 

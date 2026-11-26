# CDU 12. Analisar Justificativas

- **Ator principal**: Administradora
- **Atores secundários**: Não possui
- **Resumo**: A administradora gerencia justificativas enviadas pelas pacientes ou psicólogas para reagendamentos ou cancelamentos de consultas.
- **Pré-condição**: A usuária deve está autenticada como administradora.
- **Pós-Condição**: O sistema envia (por meio do endereço de contato escolhido no cadastro, no caso da paciente; e por meio do e-mail, no caso da psicóloga) uma notificação de aceite ou recusa para a usuária que solicitou reagendamento/cancelamento de consultas enviando sua justificativa.

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :---: | :---: | 
| 1 - No dashboard "Solicitações recentes", localizado na página inicial, a administradora clica sobre a solicitação desejada para ver mais detalhes.| |  
| | 2 - O sistema exibe ao lado do dashboard, todos os detalhes da solicitação escolhida.| 
| 3 - A administradora, analisando a justificativa, clica em "recusar" ou "aceitar".| |  
| | 4 - O sistema exibe uma mensagem de "Solicitação aceita/recusada com sucesso" para a administradora, e envia para a usuária, por meio do endereço de contato, uma notificação informando se a justificativa enviada foi aceita ou recusada.|

## Fluxo Alternativo I - Administradora personaliza busca
| Ações do ator | Ações do sistema |
| :---: | :---: | 
| 1.1 - No dashboard "Solicitações recentes", a administradora personaliza a procura, utilizando a barra de pesquisa ou o filtro, e clica sobre o nome da usuária desejada. ||  
| | (Retorno ao passo 2 do fluxo principal) |  

> Obs. as seções a seguir apenas serão utilizadas na segunda unidade do PDSWeb (segundo orientações do gerente do projeto).

## Diagrama de Interação (Sequência ou Comunicação)

> Substituir pela imagem correspondente...

## Diagrama de Classes de Projeto

> Substituir pela imagem contendo as classes (modelo, visão e templates) que implementam o respectivo CDU...

# CDU 08. Analisar solicitações

- **Ator principal**: Administradora
- **Atores secundários**: Não possui
- **Resumo**: A administradora gerencia solicitações enviadas pelas visitantes para participarem como usuárias da plataforma, seja como psicóloga voluntária ou paciente.
- **Pré-condição**: A usuária deve está autenticada como administradora.
- **Pós-Condição**: O sistema envia (por meio do endereço de contato escolhido no cadastro, no caso da paciente; e por meio do e-mail, no caso da psicóloga) uma notificação de aceite ou recusa para a usuária que solicitou participação na plataforma.

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :---: | :---: | 
| 1 - No dashboard "Solicitações recentes", localizado na página inicial, a administradora clica sobre a solicitação desejada para ver mais detalhes. | |  
| | 2 - O sistema exibe ao lado do dashboard, todos os detalhes da solicitação escolhida. | 
| 3 - A administradora, visualizando detalhes da paciente e documentos, clica em "recusar" ou "aceitar".| |  
| | 4 - O sistema mostra um aviso de que a usuária foi recusada ou aceita do sistema. |

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

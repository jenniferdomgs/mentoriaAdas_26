# CDU 01. Solicitar ser paciente

- **Ator principal**: Visitante
- **Atores secundários**: Não possui
- **Resumo**: A usuária preenche o formulário com seus dados pessoais, uma espécie de triagem e aceita ou não nossos termos de uso e privacidade. 
- **Pré-condição**: A usuária não está autenticada
- **Pós-Condição**: O sistema apresenta para a administradora essa solicitação que pode aceitar ou recusar manualmente.

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :---: | :---: | 
| 1 - Visualizando a página principal do sistema a usuária clica em "comece agora" ou "cadastro" | |  
| | 2 - O sistema abre o "formulário de atendimento" | 
| 3 - A usuária preenche devidamente o formulário e clica em "Solicitar permissão para se consultar" | |  
| | 4 - O sistema envia para a administradora a solicitação de permissão para se consultar |

## Fluxo Alternativo I - Dados do formulário inválidos ou incompletos
| Ações do ator | Ações do sistema |
| :---: | :---: | 
| 2.1 - A usuária clica em "Solicitar permissão para se consultar" com campos obrigatórios vazios ou inválidos ||  
| | 2.2 - O sistema não envia a solicitação, destaca os campos com problema e exibe mensagem indicando o que corrigir |  
| 2.3 - A usuária corrige os dados e reenvia ||  
| | 2.4 - O sistema retorna ao passo 4 do fluxo principal | 

> Obs. as seções a seguir apenas serão utilizadas na segunda unidade do PDSWeb (segundo orientações do gerente do projeto).

## Diagrama de Interação (Sequência ou Comunicação)

> Substituir pela imagem correspondente...

## Diagrama de Classes de Projeto

> Substituir pela imagem contendo as classes (modelo, visão e templates) que implementam o respectivo CDU...

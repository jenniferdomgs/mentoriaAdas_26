# Documento de Visão

## Histórico de Revisões

| Data | Versão | Descrição | Autores |
| :---: | :---: | :---: | :---: |
| 02/09/2026 | 1.0 | Versão inicial | Jennifer e Louise |
| 08/09/2026 | 1.1 | Ajustes após sugestões do professor | Louise |
| 17/09/2026 | 1.2 | Novos ajustes após revisão do professor | Louise |
| 14/10/2026 | 1.3 | Ajustes antes da primeira apresentação | Louise e Kátia |


## 1. Visão Geral do Sistema Proposto

É proposto o desenvolvimento de um sistema web de atendimento psicológico online e gratuito para mulheres em situação de violência doméstica. O objetivo do sistema é estabelecer a conexão, entre essas mulheres e as psicólogas profissionais, que estejam à disposição de colaborar com o projeto de maneira voluntária. Dessa forma, espera-se disponibilizar um espaço seguro e de acolhimento para as vítimas. O sistema deverá permitir que a paciente atendida tenha a possibilidade de pesquisar a psicóloga que acredita ser mais adequada para o seu caso. Deve ser permitido a essa paciente visualizar informações das profissionais, como nome, foto, estado, cidade e área de atuação, e solicitar um agendamento. O sistema precisa verificar se a psicóloga é adequada para trabalhar na plataforma, verificando informações como Cadastro Nacional de Profissionais da Psicologia (CRP) e documento de identificação. A psicóloga que estiver trabalhando na plataforma deve conseguir visualizar horários das sessões e informações sobre suas pacientes.

## 2. Descrição do Problema
| | |
| :-: | :-: |
| **Problema** | A falta de apoio psicológico profissional para mulheres em situação de violência, especialmente aquelas que se encontram em um contexto de vulnerabilidade social e econômica. |
| **Afeta** | Mulheres em situação de violência que se enquadram na Lei Maria da Penha. |  
| **Impacta** | A saúde mental e física de diversas mulheres brasileiras. Há o impacto negativo na construção de uma sociedade segura para as mulheres. |
| **Solução** | Criação de um sistema web de acompanhamentos psicológicos realizados de forma online e gratuita. | 

## 3. Descrição dos Usuários 

| Usuário | Descrição | Responsabilidades |
| :---: | :---: | :---: |
| Visitantes | Poderão: acessar o sistema; visualizar uma explicação sobre o que é o serviço Marias e como funciona; relatos de outras usuárias da plataforma; informações sobre as desenvolvedoras; e realizar uma triagem para entendermos melhor sobre as necessidades da interessada. Também será possível visualizar uma explicação breve sobre como funciona o cadastramento de psicólogas voluntárias. | As visitantes poderão visitar o site sem ter acesso ao catálogo de psicólogas e, consequentemente, às sessões de psicoterapia. |
| Usuárias | Possuem conta cadastrada e conseguem pesquisar e selecionar as psicólogas de interesse, tendo acesso às sessões com as profissionais. Também poderão deixar relatos anônimos na plataforma sobre as experiências utilizando o serviço. No caso das psicólogas, essas conseguem ter acesso a uma página com todas as suas respectivas pacientes, bem como a uma agenda com todos os seus horários de sessões. | As usuárias, sejam psicólogas ou pacientes, devem agir com ética e respeito mútuos. |
| Administradores | São responsáveis por administrar e moderar o conteúdo do site, as sessões realizadas por videochamadas e o tratamento de dados. | Administração da plataforma. |

## 4. Descrição do Ambiente dos Usuários

| Usuário | Ambiente operacional |
| :---: | :---: |
| Visitantes | Poderão acessar páginas do sistema como home, explicações sobre o serviço e sobre nós. As pacientes poderão acessar uma página de triagem. Também será possível visualizar informações sobre como funciona o voluntariado, destinada às psicólogas interessadas. |
| Usuárias | Pacientes e psicólogas terão acesso a todo o conteúdo da página inicial. As pacientes poderão visualizar o catálogo de psicólogas. As profissionais, por sua vez, terão acesso a um ambiente que mostra todas as suas pacientes, prontuários, agendamentos e anotações. |
| Administradores | Terão acesso a todas as páginas e funcionalidades do sistema. |


## 5. Principais Necessidades dos Usuários

1. **Paciente**
   - Buscar acolhimento de forma acessível, sem custo e sem burocracia;
   - Encontrar um canal seguro e sigiloso para relatar sua situação;
   - Ter acesso rápido a uma psicóloga disponível, sem longa espera;
   - Acessar informações e orientações confiáveis sobre seus direitos e rede de apoio;
   - Procurar a psicóloga que mais se adequa ao próprio caso, utilizando o mecanismo de filtragem;
   - Visualizar relatos e avaliações de outras mulheres que já utilizaram e/ou utilizam a plataforma;
   - Poder contar os próprios relatos e avaliações.
     
2. **Psicóloga voluntária**
   - Gerenciar sua agenda de atendimentos de forma simples;
   - Ter um dashboard com visão geral das pacientes atendidas;
   - Controlar o histórico e acompanhamento de cada paciente;
   - Registrar e acessar informações relevantes de cada caso com facilidade.

3. **Administrador(a)**
   - Garantir a segurança dos dados das pacientes e psicólogas;
   - Analisar solicitações para participar do Marias (pacientes e psicólogas);
   - Analisar justificativas de reagendamentos e cancelamentos de consultas;
   - Atuar como suporte às usuárias.
   
## 6. Alternativas Concorrentes

1. **Salve Elas**
   - Escopo geográfico limitado, abrangendo apenas o Rio Grande do Norte;
   - Ativação depende de cadastro prévio feito presencialmente em delegacia especializada;
   - Foco exclusivo em emergência/segurança física, sem suporte psicológico contínuo;
   - Vínculo institucional com órgãos de segurança pública (menos autonomia para a usuária).
     
2. **Acolhe Mais (SUS)**
   - Depende do login via Gov.br;
   - Atendimento formal/clínico, sem foco em comunidade ou autocuidado contínuo;
   - Escopo nacional, mas processo burocrático (formulário e espera de até 24h para retorno);
   - Restrito a horário comercial (seg-sex 8h-20h, sáb 8h-14h);
  
3. **Mapa do Acolhimento**
   - Engloba diferentes tipos de atendimentos, não tendo o foco no acolhimento psicológico.

## 7. Requisitos Funcionais

| Código | Nome | Descrição | Prioridade |
| :---: | :---: | :---: | :---: |
| RF01 | Autenticação de usuários | O sistema deve permitir cadastro de psicólogas e de pacientes. Uma vez cadastradas, usuárias devem conseguir fazer login. Deve haver a opção de recuperação de senha via e-mail. | Alta |
| RF02 | Solicitação para ser voluntária | Psicólogas devem visualizar informações sobre o voluntariado para o serviço. Deve estar disponível um formulário para que as profissionais interessadas possam realizar a inscrição como voluntárias. | Alta |
| RF03 | Solicitação de consulta | O sistema deve permitir que pacientes possam solicitar consulta com a(s) psicóloga(s) de sua preferência. | Alta |
| RF04 | Busca avançada de psicólogas | As usuárias devem poder filtrar as psicólogas por localidade, abordagem e agenda. | Média |
| RF05 | Editar perfil | Pacientes e psicólogas poderão editar informações do próprio perfil. | Baixa |
| RF06 | Fornecimento de agenda | A psicóloga deverá informar quais dias e horários ela estará disponível. | Média |
| RF07 | Feedback do serviço | Pacientes poderão fornecer avaliações e relatos da experiência utilizando o serviço. | Baixa |
| RF08 | Aceitamento ou recusa de consulta | A psicóloga poderá aceitar ou recusar uma consulta que foi solicitada para ela. | Alta |
| RF09 | Solicitação de reagendamento ou cancelamento | O sistema deve permitir que pacientes e psicólogas possam solicitar o reagendamento ou cancelamento de uma sessão. | Alta |

## 8. Requisitos Não-funcionais

| Código | Nome | Descrição | Categoria | Classificação |
| :---: | :---: | :---: | :---: | :---: |
| NF01 | Responsividade | O sistema deve se comportar bem em diferentes navegadores e dispositivos. | Compatibilidade | Obrigatório |
| NF02 | Criptografia | Dados sensíveis (como informações pessoais e senhas) devem ser criptografados. | Segurança | Obrigatório |
| NF03 | Performance | O sistema deve apresentar tempos de respostas rápidos. As páginas não devem demorar mais do que 2 segundos para carregar, evitando atrasos que prejudiquem a experiência das usuárias. | Desempenho | Obrigatório |

> **Categoria**: usabilidade, confiabilidade, performance, suportabilidade, restrição de projeto, implementação, interface e requisito físico - segundo classificação [FURP+](https://pt.wikipedia.org/wiki/FURPS).

> **Classificação**: desejável ou obrigatório.


## 9. Regras de Negócio

| ID  | Regra | Descrição |
| :---: | :---: | :---: |
| RN01 | Os formulários são obrigatórios para pacientes e psicólogas. | Psicólogas que desejam ser voluntárias e pacientes que queiram se consultar devem responder os respectivos formulários. |
| RN02 | Apenas psicólogas com registro ativo poderão se voluntariar. | A psicóloga deve ter o Cadastro Nacional de Profissionais de Psicologia (CRP) ativo para ser aceita na plataforma. |
| RN03 | Análise de solicitação de psicólogas voluntárias será, inicialmente, realizada de forma manual. | A equipe administradora levará até 48 horas para analisar as respostas da psicóloga ao formulário e dizer se ela é apta ou não a entrar para a equipe. |
| RN04 | Análise da usuária para aprovação da consulta será, inicialmente, realizada de forma manual. | A equipe administradora levará até 48 horas para analisar as respostas da paciente ao formulário e dizer se ela poderá consultar o catálogo de psicólogas e solicitar uma consulta. |
| RN05 | Cada usuária poderá realizar um agendamento de consulta por vez. | Não é permitido que uma mesma usuária marque mais de uma consulta para o mesmo dia e horário. |
| RN06 | A usuária poderá cancelar ou reagendar até três sessões sem justificativa, dentro de um período de seis meses. | Paciente ou psicóloga que somar mais que três cancelamentos ou reagendamentos de consulta sem justificativa não poderá agendar consulta ou realizar atendimento pelos próximos 6 meses. |
| RN07 | Acesso limitado ao site para usuárias não cadastradas. | A paciente que ainda não estiver cadastrada na plataforma e estiver aguardando aprovação, não poderá visualizar o catálogo de psicólogas, e nem solicitar uma consulta. A psicóloga que ainda não teve a inscrição aprovada, não poderá realizar as sessões de psicoterapia. |
| RN08 | O formulário de pacientes também servirá para organizar a fila de prioridade nos atendimentos. | As respostas do formulário de pacientes também funcionará como uma triagem, para que o sistema leia a gravidade de cada situação e possa organizar uma fila de prioridade dos atendimentos. | 
| RN09 | A usuária que acumular consecutivas falhas de login sofrerá restrição de acesso ao sistema. | O sistema deve bloquear tentativas de login por 24 horas após cinco falhas consecutivas. |
| RN10 | Reagendamento ou cancelamento de uma sessão deve ser de até 12h antes dessa. | O reagendamento ou cancelamento de uma sessão, por parte de paciente ou psicóloga, deve acontecer até 12h antes do horário do atendimento. Se a usuária tentar reagendar ou cancelar sem seguir essa regra, o sistema identifica que faltam menos de 12 horas para a sessão e, se ela prosseguir, fica com falta não justificada. |

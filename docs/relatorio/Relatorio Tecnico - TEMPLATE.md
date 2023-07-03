# Informações do Projeto
`TÍTULO DO PROJETO`  

FeedME

`CURSO` 

Ciencia da Cumputacao

## Participantes
> Os membros do grupo são: 
> - Vitor de Meira Gomes
> - Giuseppe Sena Cordeiro
> - João Vítor de Freitas Scarlatelli
> - Gabriel Maia Simões de Matos
> - Nagib Alexandre Verly Borjaili
> - Lorena Teles Trindade

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)

  - [Participantes](#participantes)
  
- [Estrutura do Documento](#estrutura-do-documento)

- [Introdução](#introdução)
  
  - [Problema](#problema)
  
  - [Objetivos](#objetivos)
  
  - [Justificativa](#justificativa)

  - [Público-Alvo](#público-alvo)

- [Especificações do Projeto](#especificações-do-projeto)

  - [Personas, Empatia e Proposta de Valor](#personas-empatia-e-proposta-de-valor)
  
  - [Histórias de Usuários](#histórias-de-usuários)
  
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
    
    
  - [Restrições](#restrições)
  
- [Projeto de Interface](#projeto-de-interface)

  - [User Flow](#user-flow)
  
  - [Wireframes](#wireframes)
  
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)

  - [Ferramentas](#ferramentas)
  
  - [Controle de Versão](#controle-de-versão)
  
  
  
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)

- [Projeto da Solução](#projeto-da-solução)

  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  
  - [Arquitetura da solução](#arquitetura-da-solução)
  
- [Avaliação da Aplicação](#avaliação-da-aplicação)

  - [Plano de Testes](#plano-de-testes)
  
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  
  - [Registros de Testes](#registros-de-testes)
  
- [Referências](#referências)

# Introdução

## Problema

Com o tempo, os restaurantes se tornaram um lugar para socializar melhor com as pessoas, além do mais, com a internet, as pessoas acabam ficando cada vez mais afastadas uma das outras.
Com isso, ocorreu a superlotação em grande massa dos restaurantes, dificultando o atendimento dos garçons, com isso, os donos acabam tendo que contratar mais pessoas para suprir a necessidade das meses. Assim, surge nossa ideia, onde aborda os principais problemas dos restaurantes.
	Tendo em vista os restaurantes locais, é nítido a instabilidade de acerto dos pratos, por mais que seja uma taxa elevada, ainda sim possui uma grande taxa de erros. Com isso, pensamos na ideia de um app onde facilite a solicitação dos pedidos, e torne cada vez mais rápida a entrega dos pratos ou bebidas.
	No cotidiano, os restaurantes acabam trocando os pratos e as bebidas de forma a não serem coniventes com o pedido do cliente. Isso acaba gerando uma certa insatisfação no consumidor, vindo a reclamar ou até deixar uma avaliação negativa para o restaurante. Com isso a visibilidade do restaurante acaba caindo cada vez mais.

## Brainstorm 
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/relatorio/images/Introducao/1.jpg" alt="brainstorm">

## Matriz Certezas
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/relatorio/images/Introducao/2.jpg" alt="matriz">

## Objetivos

O objetivo do software é acelerar e melhorar o método de pagamento e de entrega dos pratos das pessoas até a mesa, funcionando de maneira que o cliente pede na mesa e a cozinha recebe direto o pedido. Para facilitar a entrega dos pratos, sem que aja a grande possibilidade de errar.

## Justificativa

Diariamente as pessoas acabam indo em restaurantes e pedindo suas comidas favoritas, e com isso, às vezes, acabam recebendo os pratos errados, de forma a trazer a infelicidade para as pessoas, o que leva ela a buscar uma melhor forma de pedir sua comida favorita. Por isso a ideia do aplicativo, onde as pessoas poderiam pedir a comida de uma forma mais fácil, e agilizar o processo de pagar as contas. Com isso, levando a atingir pessoas de classe média alta, que possuem uma mínima insatisfação com o restaurante, até os mais ricos, que querem sua comida o mais fiel ao pedido.

## Público-Alvo

Com isso, levando a atingir pessoas de classe média alta, que possuem uma mínima insatisfação com o restaurante, ate os mais ricos, que querem sua comida o mais fiel ao pedido.

 
# Especificações do Projeto

 Nesta seção será apresentado à quem este serviço irá beneficiar. Através das personas, dos mapas de empatia, propostas de valor e a história dos usuário, é possível contextualizar quem será o usuário. Também é apresentado os requisitos e restrições da criação do projeto, visando mostrar com detalhes o foco do projeto, assim como possíveis dificuldades e limitações.
## Personas, Empatia e Proposta de Valor

As personas do serviço FeedME são pessoas de diversas faixa etárias que possuem problemas com a demora do atendimento em restaurantes e a baixa taxa de sucesso na entrega dos pratos. Este serviço presta ajuda tanto para as personas de clientes, como também para personas de gerentes de estabelecimentos.

> ## Persona José Carlos
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/relatorio/images/Personas/Persona%20Jose%20Carlos.png" alt="persona_Jose">

> ## Mapa de Empatia José Carlos
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/relatorio/images/Mapa%20de%20empatia/Mapa%20de%20Empatia%20José%20Carlos.png" alt="mapa_de_empatia_Jose">
 
> ## Proposta de Valor José Carlos
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/relatorio/images/Proposta%20de%20Valor/Proposta%20de%20Valor%20Jose%20Carlos.png" alt="prosposta_de_valor_Jose">

> ## Persona Ana Pimenta
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/relatorio/images/Personas/Persona%20Ana%20Pimenta.png" alt="persona_Ana">

> ## Mapa de Empatia Ana pimenta
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/relatorio/images/Mapa%20de%20empatia/Mapa%20de%20Empatia%20Ana%20Pimenta.png" alt="mapa_de_empatia_Ana">

> ## Proposta de Valor Ana pimenta
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/relatorio/images/Proposta%20de%20Valor/Proposta%20de%20Valor%20Antônio%20Pimenta.png" alt="proposta_de_valor_Ana">

> ## Persona Antônio
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/relatorio/images/Personas/Persona%20Antônio%20Pereira.png" alt="persona_Antonio">

> ## Mapa de Empatia Antônio
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/relatorio/images/Mapa%20de%20empatia/Mapa%20de%20Empatia%20Antônio%20Pereira.png" alt="mapa_de_empatia_Antonio">

> ## Proposta de Valor Antônio
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/relatorio/images/Proposta%20de%20Valor/Proposta%20de%20Valor%20Antônio%20Pimenta.png" alt="proposta_de_valor_antonio">


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| José Carlos         | Conseguir otimizar meu tempo       | Poder ter mais tempo para praticar meus hobbys e descansar|
| José Carlos        | Explorar restaurantes japoneses de minha cidade | Aumentar meu conhecimento da culinária japonesa  |
| Ana Pimenta | Aumentar a inclusão de meu restaurante | Poder atender com qualidade minha clientela, ajudando clientes com deficiência visual |
| Ana Pimenta | Expandir seu restaurante para outros estados do Brasil | Poder aumentar o legado do restaurante de sua família |
| Ana Pimenta | Compartilhar seu restaurante nas redes sociais com maior facilidade | Poder atrair mais clientes | 
| Antônio Pereira | Saber de forma fácil os cardápios de restaurantes de minha cidade pela internet | Ter mais detalhes do local antes de visitar|
| Antônio Pereira | Uma forma fácil de ter acesso a cardápios virtuais | Me atualizar com a tecnologia, mesmo com minhas dificuldades 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário faça pedidos | ALTA | 
|RF-002| Sistema de avaliação de restaurantes e pratos   | MÉDIA |
|RF-003| Registro de conta | MÉDIA |
|RF-004| Sistema de pagamento no site | ALTA |
|RF-005| Sistema de recompensas no site | BAIXA |
|RF-006| Sistema de comentários | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Sistema responsivo e com formato simples | MÉDIA | 
|RNF-002| Sistema de notificações no email |  BAIXA |
|RNF-003| Integrar diferentes linguagens | ALTA |
|RNF-004| Modo de leitura facilitada | MÉDIA |
|RNF-005| Opção de gorjeta | BAIXA|


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| A última sprint deve ser entregue até o dia 2 de julho |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O projeto deve ser constantemente analisado e avaliado pelos professores |
|04| Todos os membros do grupo devem participar efetivamente|


# Projeto de Interface

>  Nosso projeto de aplicação possui inicialmente 8 telas que abrangem as principais necessidades do usuário, essas telas foram elaboradas pensando nas funcionalidades mais importantes do projeto e nas requisições mais comuns dos clientes como: verificar restaurantes próximos, visualizar o cardápio de forma mais fácil, poder escolher modificações no pedido e as mesmas serem devidamente armazenadas nas informações entre outros. O projeto atualmente conta com um fluxo bem abrangente que permite uma visualização pratica da proposta apresentada neste artigo.

## User Flow

> Link do Marvel App
> https://marvelapp.com/prototype/6aed4f7

<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/relatorio/images/imgs%20projeto%20de%20interface/diagrama.png" alt="diagrama_fluxo">

## Wireframes

> Os wireframes apresentados abaixo representam bem a proposta do projeto e as principais intenções de telas a serem utilizadas pelos usuários, neste modelo podemos ver um esquema completo desde login até confirmação de pagamento para termos uma noção mais elaborada da ideia a ser trabalhada no projeto FeedME.

## Tela de login
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/relatorio/images/imgs%20projeto%20de%20interface/1.png" alt="login">

## Tela de menu principal
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/relatorio/images/imgs%20projeto%20de%20interface/2.png" alt="menu">

## Lista de restaurantes disponíveis
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/relatorio/images/imgs%20projeto%20de%20interface/3.png" alt="lista_restaurantes">

## Cardápio digital
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/relatorio/images/imgs%20projeto%20de%20interface/4.png" alt="cardapio">

## Modificações do pedido
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/relatorio/images/imgs%20projeto%20de%20interface/5.png" alt="modificacoes">

## Carrinho
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/relatorio/images/imgs%20projeto%20de%20interface/6.png" alt="carrinho">

## Forma de pagamento
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/relatorio/images/imgs%20projeto%20de%20interface/7.png" alt="pagamento">

## Confirmação de pagamento
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/relatorio/images/imgs%20projeto%20de%20interface/8.png" alt="fim_pagamento">





# Metodologia



> A metodologia adotada será uma abordagem scrum, onde o grupo aceita que o problema 
> pode não ser totalmente entendido ou definido no início e que provavelmente os requisitos 
> irão mudar ao longo do tempo.

## Mapa de Priorização
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/concepcao/Mapa%20de%20Priorizacao.png" alt="priorizacao">

## Matriz de Alinhamento
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/concepcao/Matriz%20de%20Alinhamento%20CSD.png" alt="matriz_alinhamento">

## Stakeholders
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/concepcao/Stakeholder.png" alt="stakeholders">

## Highlights de Pesquisa
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/concepcao/imagem_2023-04-16_170021150.png" alt="pesquisa">

## Priorização de Ideias
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/concepcao/imagem_2023-04-16_170348081.png" alt="priorizacao">

## Mural de Possibilidades 
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/concepcao/imagem_2023-04-16_170515574.png" alt="possibilidades">

## Brainstorming / Brainwriting
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/concepcao/imagem_2023-04-16_170645976.png" alt="brain">

## Personas
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/concepcao/persona1.png" alt="pesona1">
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/concepcao/persona2.png" alt="pesona2">
<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/concepcao/persona3.png" alt="pesona3">

## Divisão de Papéis

> Scrum Master
  	- Vitor de Meira Gomes
  
  >Equipe de Desenvolvimento
  	- Giuseppe Sena Cordeiro
  	- João Vítor de Freitas Scarlatelli
  	- Lorena Teles Trindade
  	- Gabriel Maia Simões de Matos
  	- Vitor de Meira Gomes
  	- Nagib Alexandre Verly Borjaili
  	
  > Product Onwer
  	- Giuseppe Sena Cordeiro

## Ferramentas


| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinking  | Miro |  https://miro.com/app/board/uXjVMU6iLGg=/#tpicker-content | 
|Repositório de código | GitHub | https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe | 
|Hospedagem do site | Heroku |  https://XXXXXXX.herokuapp.com | 
|Protótipo Interativo | MavelApp | https://marvelapp.com/prototype/6aed4f7 | 

>
> Liste as ferramentas empregadas no desenvolvimento do
> projeto, justificando a escolha delas, sempre que possível.
> 
> As ferramentas empregadas no projeto são:
> 
> - Editor de código.
> - Ferramentas de comunicação
> - Ferramentas de diagramação
> - Plataforma de hospedagem
> 
> O editor de código foi escolhido porque ele possui uma integração com o
> sistema de versão. As ferramentas de comunicação utilizadas possuem
> integração semelhante e por isso foram selecionadas. Por fim, para criar
> diagramas utilizamos essa ferramenta por melhor captar as
> necessidades da nossa solução.
> 
> **Links Úteis - Hospedagem**:
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Crie seu Site com o HostGator](https://www.hostgator.com.br/como-publicar-seu-site)
> - [GoDady](https://br.godaddy.com/how-to)
> - [GitHub Pages](https://pages.github.com/)

## Controle de Versão


> A ferramenta de controle de versão adotada no projeto foi o
> Git, sendo que o Github
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, cada um que está desenvolvendo possui a sua própria organização, mas todas as alterações respeitam a função dos branchs.
> Os `issues` não foram utilizados no momento.
> Os merges são utilizados juntamente com o pull request para segurança dos dados e verificação de mudanças.


# Projeto da Solução

 Nosso serviço FeedME foi desenvolvido para ser um site que irá otimizar o atual processo de tomada de pedidos em restaurantes. Atráves de sua interface facilitada e com inclusão de diferentes línguas, o usuário pode criar uma conta no site e começar a fazer seus pedidos diretamente pelo site. Quando selecionada a opção "Mais pedidos" são fornecidas ao usuário diversas opções de produtos com altas avaliações e grande demanda em sua localização. O serviço FeedME busca conseguir ajudar restaurantes que sofrem com o atendimento em horários de pico. Restaurante consegue se aplicar para participar do serviço FeedME através da opção "Cadastrar". Após a verificação das informações do restaurante e de seus produtos, o memso poderá sem um membro do serviço FeedME de forma gratuita. É extremamente recomendado que restaurantes parceiros do programa FeedME possuam internet de boa qualidade para seus clientes. 

## Tecnologias Utilizadas

*Html: utilizado para projetar a estrutura do site e tornar o memso responsivo para usuários de todos os dispositivos.

*Css: através desta linguagem foi feito o estilo do site.

*Javascript: foi utilizado para implementar o sistema de registro e login;  comentários; busca; cadastro de restaurantes e produtos; histórico de compras; sistema de pedidos; notificações; paleta de cores e sistema de tradução.

*JSON: utilizado para incluir diversas línguas no site e para armazenar produtos de restaurantes.

*GitHub: hospedagem do repositório e para controle da versão final.

*Visual Studio Code: utilizado como editor de código principal durante o precosso de desenvolvimento do serviço.

*OBS Studio: programa utilizado na gravação do vídeo do projeto.

*Miro: utilizado para a criação dos wireframes durante o processo de copcepção do projeto.

*Trello: organização das tarefas e funções de cada membro da equipe.


<img src="https://github.com/ICEI-PUC-Minas-PMGCC-TI/FeedMe/blob/master/docs/relatorio/images/wireframe-feedme.png" alt="wireframe">

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

Nossa equipe fez 4 tipos de testes: Autenticação, funcionalidade, desempenho e compatibilidade. No teste de autenticação foi muito bem-sucedido, é possível acessar a conta somente com a senha e login correto, guardando suas informações escolhidas. O teste de funcionalidade foi feito juntamente com o de contabilidade, ambos tiveram resultados excelentes. Nossas funções funcionaram de acordo com o planejado e em todos dispositivos e redes que tentamos.  Quanto ao teste de desempenho, tivemos o empecilho de ter um número pequeno e limitado de dispositivos para entramos no site ao mesmo tempo, então não sabemos da capacidade máxima que o site suporta.  

## Plano de Testes

O site foi testado em um pequeno restaurante no interior. Foi usado todas as funcionalidades e o dono do restaurante gostou bastante, o site tem uma ótima proposta e facilita bastante a experiencia do cliente no restaurante. O único ponto negativo apresentado, quanto do dono e dos cliente, é a baixa acessibilidade do site. 

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

Nos testes os pontos positivos encontrados foram: A ideia que é, facilitar a experiencia do usuário em determinado restaurante, e também que o mesmo pode ser usado por pessoas de diversos países, pois o próprio site possui a funcionalidade de tradução. Em relação aos pontos encontrados foram: A falta acessibilidade para quem é leigo em tecnologia e pessoas com deficiência visual. Em relação ao primeiro problema, achamos que o que pode ser feito é pela parte do restaurante de disponibilizar um funcionário para ajudar os leigos. Sobre o segundo problema, pretendemos colocar uma voz gravada para ler o site e ajudar pessoas com deficiência a desfrutarem a experiencia que proporcionamos. 


# Referências

https://comparaplano.com.br/blog/aplicativos-de-comida/
https://www.segs.com.br/educacao/351142-rango-app-de-alimentacao-para-centros-universitarios-e-criado-no-ceub
https://www.teknisa.com/automacao-comercial/sistema-para-restaurante-com-tablet/

Ou restaurantes que ja usam o produto, que e o caso do restaurante Kyoto, localizado em vaios lugares do mundo. Um exemplo de uma de suas franquiaa:

https://www.teknisa.com/automacao-comercial/sistema-para-restaurante-com-tablet/

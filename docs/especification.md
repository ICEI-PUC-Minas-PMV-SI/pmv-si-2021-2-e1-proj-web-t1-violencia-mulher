# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

1.

2. Roberta tem 44 anos, trabalha como telemarketing e mudou-se recentemente para um novo bairro. Em sua nova casa, conheceu uma vizinha, Anne, que detalhou situações de seu casamento que, para ela, são normais, mas, para sua nova vizinha, se encaixam como crimes. Apesar de querer tomar uma atitude, Roberta não se sente capaz de explicar para Anne o problema da situação da melhor forma. Sendo assim, Roberta gostaria de denunciar o caso e, além disso, ter informações suficientes para conseguir explicar para Anne o porquê daquelas situações descritas serem problemáticas e porque ela deveria se afastar em definitivo de seu marido.

3. Joana, mulher de 43 anos, casada, tem dois filhos, é dona de casa e mora na cidade de Belo Horizonte, em Minas Gerais. Apanhou do marido durante vinte anos, mas sentia medo de denunciar por conta das ameaças do agressor sobre afastá-la dos filhos caso contasse a alguém o que acontecia dentro de casa. Há três anos, Joana decidiu realizar sua denúncia. O agressor foi julgado legalmente e afastado da convivência de Joana e sua família. A mulher está refazendo a vida e busca plataformas onde possa contar sua história e incentivar outras vítimas a denunciarem e romperem com o ciclo de violência.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

| EU COMO... `PERSONA`          | QUERO/PRECISO ... `FUNCIONALIDADE` | PARA ... `MOTIVO/VALOR`        |
|-------------------------------|------------------------------------|--------------------------------|
|Vítima de violência doméstica no presente | Encontrar informação, redes de apoio, depoimentos, experiências e canais de denúncia em Belo Horizonte | Conhecer os tipos de violência contra a mulher e a legislação sobre o tema. Receber apoio e acolhimento. Denunciar o agressor|
|Interessada em ajudar uma vítima de violência doméstica | Encontrar informação sobre violência contra a mulher, redes de apoio e canais de denúncia em Belo Horizonte | Esclarecer à vítima sobre a violência contra a mulher e a legislação sobre o tema. Divulgar a rede de apoio e acolhimento. Encorajar a vítima a denunciar o agressor|
|Vítima de violência doméstica no passado | Compartilhar a própria história | Encorajar outras vítimas a denunciarem seus agressores e promover acolhimento |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| A abrangência do projeto limita-se a Belo Horizonte |
|02| O projeto deverá ser entregue até o final do semestre, não podendo extrapolar a data de 17/12/2021 |
|03| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

1. Dona Nanda tem 53 anos, é aposentada e dona de casa, não terminou o ensino fundamental e deseja continuar os estudos de onde parou para realizar o sonho de se formar. Entretanto, seu marido, Walter, não permite que ela administre o dinheiro que recebe da aposentadoria, e, por vontade própria, decidiu que não a deixaria realizar seu sonho acadêmico. Nanda, por anos, acreditou que esse comportamento fosse normal, mas ouviu de suas irmãs que isso era um tipo de repressão e que seu marido poderia ser enquadrado na lei Maria da Penha. Nanda não entende como o confisco do seu dinheiro por seu marido pode se enquadrar como crime.

2. Roberta tem 24 anos, trabalha como telemarketing e mudou-se recentemente para um novo bairro. Em sua nova casa, conheceu uma vizinha, Anne, que detalhou situações de seu casamento que, para ela, são normais, mas, para sua nova vizinha, se encaixam como crimes. Apesar de querer tomar uma atitude, Roberta não se sente capaz de explicar para Anne o problema da situação da melhor forma. Sendo assim, Roberta gostaria de denunciar o caso e, além disso, ter informações suficientes para conseguir explicar para Anne o porquê daquelas situações descritas serem problemáticas e porque ela deveria se afastar em definitivo de seu marido.

3. Joana, mulher de 43 anos, casada, tem dois filhos, é dona de casa e mora na cidade de Belo Horizonte, em Minas Gerais. Apanhou do marido durante vinte anos, mas sentia medo de denunciar por conta das ameaças do agressor sobre afastá-la dos filhos caso contasse a alguém o que acontecia dentro de casa. Há três anos, Joana decidiu realizar sua denúncia. O agressor foi julgado legalmente e afastado da convivência de Joana e sua família. A mulher está refazendo a vida e busca plataformas onde possa contar sua história e incentivar outras vítimas a denunciarem e romperem com o ciclo de violência.

## Histórias de Usuários

Com base na análise das personas, foram identificadas as seguintes histórias de usuários:

| EU COMO... `PERSONA`          | QUERO/PRECISO ... `FUNCIONALIDADE` | PARA ... `MOTIVO/VALOR`        |
|-------------------------------|------------------------------------|--------------------------------|
|Vítima de violência doméstica no presente | Encontrar informação, redes de apoio, depoimentos, experiências e canais de denúncia em Belo Horizonte | Conhecer os tipos de violência contra a mulher e a legislação sobre o tema. Receber apoio e acolhimento. Denunciar o agressor|
|Interessada em ajudar uma vítima de violência doméstica | Encontrar informação sobre violência contra a mulher, redes de apoio e canais de denúncia em Belo Horizonte | Esclarecer à vítima sobre a violência contra a mulher e a legislação sobre o tema. Divulgar a rede de apoio e acolhimento. Encorajar a vítima a denunciar o agressor|
|Vítima de violência doméstica no passado | Compartilhar a própria história | Encorajar outras vítimas a denunciarem seus agressores e promover acolhimento |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Disponibilizar área com informações sobre os tipos de violência contra a mulher| ALTA | 
|RF-002| Disponibilizar área com informações de leis referentes a violência contra a mulher | ALTA |
|RF-003| Disponibilizar área com informações sobre instituições de apoio a mulheres vítimas de violência | ALTA |
|RF-004| Disponibilizar área em que o usuário poderá inserir depoimentos | ALTA |
|RF-005| Disponibilizar área com informações e links de direcionamento sobre os principais meios de denúncia | ALTA |



### Requisitos não Funcionais

|ID    | Descrição do Requisito  |Prioridade |
|RNF-01| Interface responsiva adaptável a qualquer interface utilizada - Browser, Smartphone ou Tablet | ALTA |
|RNF-02| Disponibilidade de adaptação da interface pró acessibilidade | ALTA |
|RNF-03| FrontEnd desenvolvido em HTML e JavaScript | MÉDIA |
|RNF-04| Navegação intuitiva e otimizada que possibilite interação com qualquer usuário | MÉDIA |
|RNF-05| A página deverá ter disponibilidade em 90% do tempo | BAIXA |
|RNF-06| Tempo de resposta não superior a 3s para solicitação de usuario | BAIXA |

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

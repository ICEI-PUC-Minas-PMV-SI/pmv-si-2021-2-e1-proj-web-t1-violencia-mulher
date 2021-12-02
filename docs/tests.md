# Plano de Testes de Software

## Resultados Esperados

| Nº Teste | Página | Cenário de teste |
|-----------|-----------------------------------------|----|
|TF-001| Home | Ao abrir a index, é esperado que sejam carregados os "cards" de Depoimento, Denúncia, Redes de Apoio e o carrossel de notícias, bem como a topbar e a footbar. |
|TF-002| Home | Ao clicar em "Saiba Mais", é esperado que o usuário seja direcionado para a página "Quem Somos" |
|TF-003| Home | Ao clicar em "Legislação" na topbar, é esperado que o usuário seja direcionado para a página "Tipos de Violência/Resumo da Lei Maria da Penha". |
|TF-004| Home | Ao clicar no botão "Ver Mais" nos cards de Redes de Apoio, o usuário deve ser direcionado para a página com detalhes da rede de apoio selecionada. |
|TF-005| Home | Ao clicar no botão "Ver mais Depoimentos", o usuário deve ser direcionado para a página de visualização de depoimentos. | 
|TF-006| Home | Ao clicar no botão "Cadastrar Depoimentos", o usuário deve ser direcionado para a página de cadastro de depoimento. |
|TF-007| Home | É esperado que haja, no mínimo, três notícias no carrossel de notícias. Elas devem ser notícias diferentes.  |
|TF-008| Legislação | Ao carregar a página, é esperado que o menu interativo apresente o conteúdo que lhe é esperado apresentar após a seleção do usuário. |
|TF-009| Redes de Apoio | Ao selecionar a cidade, é esperado que o usuário visualize apenas as instituições de apoio da cidade escolhida. As instituições devem desaparecer após uma nova seleção. |
|TF-010| Visualizar Depoimentos | Ao carregar a página, é esperado que seja carregados os depoimentos apresentados em destaque na index (Home), além daqueles enviados antes desses. Os depoimentos não devem se repetir.  |
|TF-011| Cadastrar Depoimentos | Ao preencher o formulário, o usuário deve ter a opção de envio anônimo (sem identificação de nome). |
|TF-012| Cadastrar Depoimentos | Ao enviar o formulário, é esperado que o site apresente a mensagem de "Depoimento publicado com sucesso" e, após apertar OK, retorne à página de visualização de depoimentos. |
|TF-013| Denúncia | Ao clicar no botão "Denúncia" na topbar, é esperado que o usuário seja direcionado à página de escolha do tipo de denúncia (Online ou Presencial). |
|TF-014| Denúncia | Ao clicar no botão "Online", é esperado que o usuário seja direcionado à página da delegacia virtual estadual do Governo de Minas para registro de boletim de ocorrência. |
|TF-015| Denúncia | Ao clicar no botão "Presencial/Telefone", é esperado que o usuário seja direcionado à página de busca por unidades de denúncia filtradas por cidade. |
|TF-016| Denúncia Presencial | Ao selecionar a cidade, é esperado que o usuário visualize apenas as informações (nome, telefones e endereços) das delegacias/postos de denúncia da cidade escolhida. As localidades devem desaparecer após uma nova seleção. |


# Registro de Testes de Software

## Resultados Obtidos

| Nº Teste | Página | Resultado do Teste | Bugs? |
|----|-----------------------------------------|----|----|
|RTF-001| Home | Todos os "cards" previstos foram carregados na index/homepage sem atrasos ou bugs. | NÃO |
|RTF-002| Home | O botão direciona corretamente o usuário para a página esperada. | NÃO |
|RTF-003| Home | O botão direciona corretamente o usuário para a página esperada. | NÃO |
|RTF-004| Home | O botão não direciona corretamente o usuário para a página de Rede de Apoio já preenchida com as informações da instituição selecionada na homepage, mas direciona corretamente para a página de Redes de Apoio com filtragem por cidade. | SIM |
|RTF-005| Home | O botão direciona corretamente o usuário para a página de visualização de depoimentos, em que todos esses carregaram corretamente. | NÃO |
|RTF-006| Home | O botão direciona corretamente o usuário para a página esperada.. | NÃO |
|RTF-007| Home | A quantidade e variedade de notícias no carrossel de notícias correspondem ao resultado desejado. | NÃO |
|RTF-008| Legislação | O menu interativo da página funciona corretamente, apresentando as informações desejadas. | NÃO |
|RTF-009| Redes de Apoio | Após seleção da cidade, informações apresentadas na seleção anterior permanecem na tela. | SIM |
|RTF-010| Visualizar Depoimentos | A página funciona conforme o esperado, carregando todos os depoimentos de forma a não repetí-los. | NÃO |
|RTF-011| Cadastrar Depoimentos | A opção de anonimato no depoimento está presente, conforme o desejado. | NÃO |
|RTF-012| Cadastrar Depoimentos | A página apresente a menságem pop-up de êxito após envio de formulário, conforme desejado. | NÃO |
|RTF-013| Denúncia |  O botão direciona corretamente o usuário para a página esperada. | NÃO |
|RTF-014| Denúncia |  O botão direciona corretamente o usuário para a página esperada. | NÃO |
|RTF-015| Denúncia |  O botão direciona corretamente o usuário para a página esperada. | NÃO |
|RTF-016| Denúncia Presencial | A seleção funciona conforme o desejado, apresentando as informações conforme a cidade e eliminando as anteriores após nova seleção. | NÃO |


## Avaliação

Foram realizados testes funcionais do sistema, de acordo com o Plano de testes funcionais, no ambiente de produção no dia 25 de novembro de 2021 às 16h00.

Foram reportados os seguintes bugs:

- (RTF-004) Ao clicar na opção "Ver mais" em um dos cards "Redes de Apoio" da homepage, o usuário é direcionado para a página de Redes de Apoio sem a apresentação das informações da instituição selecionada na index.

- (RTF-009) Ao fazer a seleção de uma cidade na página "Redes de Apoio", os dados da cidade selecionada anteriormente permanecem na tela, apenas acumulando as informações junto às da nova seleção.

Os bugs ainda não foram resolvidos até a escrita deste documento.

Novos testes serão realizados em breve após a correção dos problemas.

<hr>
 
<p align="right"><a href="./development.md">Programação de Funcionalidades</a> | <a href="presentation/README.md">Referências</a></p>
<div align="justify"> 
  
# Programação de Funcionalidades

*Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.*

As tecnologias utilizadas para o desenvolvimento do projeto se baseiam nas linguagens HTML, CSS e JavaScript.

Nesta seção é apresentada a implementação dos requisitos descritos nas <a href="./especification.md">Especificações do Projeto</a>.

As telas para cada uma das funcionalidades do sistema são apresentadas a seguir.

### Disponibilizar área com informações sobre a violência contra a mulher e os tipos de violência - RF-001
Inserir texto

### Disponibilizar área com informações de leis referentes a violência contra a mulher - RF-002
Inserir texto

### Disponibilizar área com informações sobre instituições de apoio a mulheres vítimas de violência  (RF-003) e disponibilizar funcionalidade que permita pesquisar instituições de apoio (RF-006)

As páginas "Redes de apoio" e "Denuncie" apresentam uma lista de opções com 58 cidades do estado de Minas Gerais. 

Na página "Redes de apoio", ao selecionar uma cidade, a function implementada no arquivo **src/js/rede-apoio.js** é executada e exibe a(s) rede(s) de apoio da cidade:
  
![Tela Rede Apoio resultado](img/Tela-Rede-Apoio-resultado.png)

Para as cidades que não possuem redes de apoio, uma mensagem padrão é exibida na tela.:

![Tela Rede Apoio sem resultado](img/Tela-Rede-Apoio-semresultado.png)

Na página "Denúncia presencial/telefone", ao selecionar uma cidade, a function implementada no arquivo **src/js/denuncie-presencial.js** é executada e exibe a delegacia da mulher da cidade:

![Tela Denuncia Presencial](img/Tela-Denuncia-Presencial.png)

Nos dois arquivos js citados, a estrutura de dados utilizada é JSON, conforme imagem a seguir:

![JSON](img/JSON.png)  


### Disponibilizar página em que o usuário poderá inserir depoimentos - RF-004
Esta funcionalidade é responsável pelo cadastro de novos depoimentos. Os dados cadastrados são registrados no Local Storage.

![Tela Cadastro de Depoimentos](img/tela-depoimentos-cadastro.png)

Após o envio do formulário, é exibido um modal com mensagem informando o sucesso no envio:

![Modal Depoimento enviado com sucesso](img/tela-depoimentos-sucesso.png)

### Disponibilizar página em que o usuário poderá ler os depoimentos - RF-005
Na página "Depoimentos", o usuário pode visualizar todos os depoimentos já cadastrados no site.

![Tela Leitura de Depoimentos](img/tela-depoimentos-leitura.png)

### Disponibilizar funcionalidade que permita definir perfil de usuário anônimo ou identificado para depoimento - RF-007
Inserir texto

![Tela Cadastro de Depoimento Anônimo](img/tela-depoimentos-anonimo.png)

### Disponibilizar funcionalidade que permite consultar depoimentos por regiões de Minas Gerais - RF-008
Inserir texto

### Disponibilizar sessão com últimas notícias relacionadas pertinentes ao tema de violência contra a mulher - RF-009
Inserir texto

</div>

<hr>
 
<p align="right"><a href="./template.md">Template Padrão</a> | <a href="./tests.md">Testes de Software</a></p>
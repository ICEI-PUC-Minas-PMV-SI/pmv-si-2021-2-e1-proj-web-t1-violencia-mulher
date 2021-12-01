
<?php
  //Arquivo index.php foi criado para que o projeto seja identificado no servidor Heroku
  //A função include_once() direciona para a página principal index.html
  //O arquivo composer.json em branco também é necessário para o heroku reconhecer a linguagem PHP.
  include_once("./src/index.html");
  include_once("./src/quem-somos.html");
  include_once("./src/css/quem-somos.css");
?>
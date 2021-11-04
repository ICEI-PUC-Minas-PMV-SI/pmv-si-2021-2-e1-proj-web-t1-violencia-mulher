function ExibeResultado() { 
    var selecao = document.getElementById("selecaoCidade");
    var cidade = selecao.options[selecao.selectedIndex].value;

    switch (cidade) {
        case "1":
        document.getElementById("resultado-instituicao").innerHTML = "Centro de Referência Especializado de Assistência Social - CREAS";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: R. Tiradentes, 1088 - Parque das Nações, Alfenas - MG, 37130-000";
        document.getElementById("resultado-site").innerHTML = "Site:";
        document.getElementById("resultado-email").innerHTML = "E-mail:";
        document.getElementById("resultado-tel").innerHTML = "Telefone: (35) 3297-4547";

        document.getElementById("resultado-instituicao2").innerHTML = "Núcleo de Atenção à Mulher (NAM) - Unifal-MG";
        document.getElementById("resultado-endereco2").innerHTML = "R. Nabor Toledo Lopes, 598 - Parque das Nações, Alfenas - MG, 37130-000";
        document.getElementById("resultado-site2").innerHTML = "Site: https://www.unifal-mg.edu.br/prace/nam/";
        document.getElementById("resultado-email2").innerHTML = "E-mail: prace@unifal-mg.edu.br";
        document.getElementById("resultado-tel2").innerHTML = "Telefone: (35) 3701-9242";

        break;

        case "2":
        document.getElementById("resultado-instituicao").innerHTML = "Unidade de Acolhimento de Araguari";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Dolival Gonçalves de Araújo, 35 - Milenium, Araguari - MG, CEP 38447-369";
        document.getElementById("resultado-site").innerHTML = "Site: ";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        document.getElementById("resultado-tel").innerHTML = "Telefone: (61) 3315-9144";

        document.getElementById("resultado-instituicao2").innerHTML = "Núcleo de Defesa da Mulher";
        document.getElementById("resultado-endereco2").innerHTML = "Endereço: Praça Getúlio Vargas - Centro, Araguari - MG, 38440-254";
        document.getElementById("resultado-site2").innerHTML = "Site: ";
        document.getElementById("resultado-email2").innerHTML = "E-mail: ";
        document.getElementById("resultado-tel2").innerHTML = "Telefone: (61) 3315-9144";
        break;

        case "3":
        document.getElementById("resultado-instituicao").innerHTML = "Centro de Referência Especializado da Assistência Social (CREAS)";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Av. Imbiara, 900 - Centro, Araxá - MG, 38183-244";
        document.getElementById("resultado-site").innerHTML = "Site: https://cmdcaaraxa.com.br/creas/ ";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        document.getElementById("resultado-tel").innerHTML = "Telefone: (34) 36912-2024";
        break;

        case "4":
        document.getElementById("resultado-instituicao").innerHTML = "Mulheres Pela Paz";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Av. Gov. Benedito Valadares, 306 - São Sebastião, Barbacena - MG, 36200-008";
        document.getElementById("resultado-site").innerHTML = "Site: ";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        document.getElementById("resultado-tel").innerHTML = "Telefone: (32) 3332-9638";
        break;

        case "5":
        document.getElementById("resultado-instituicao").innerHTML = "Centro Especializado de Atendimento a Mulher - Benvinda";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: R. Hermilo Alves, 34 - Santa Tereza, Belo Horizonte - MG, 31010-115 ";
        document.getElementById("resultado-site").innerHTML = "Site: https://prefeitura.pbh.gov.br/smasac/sudc/equipamentos/benvinda ";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        document.getElementById("resultado-tel").innerHTML = "Telefone: (31) 3277-4380 | (31) 98873-2036";

        document.getElementById("resultado-instituicao2").innerHTML = "Casa dos Direitos Humanos";
        document.getElementById("resultado-endereco2").innerHTML = "Endereço: Av. Amazonas, 558 - Centro, Belo Horizonte - MG, 30170-130";
        document.getElementById("resultado-site2").innerHTML = "Site: http://direitoshumanos.social.mg.gov.br/pagina/atendimento/casa-de-direitos-humanos";
        document.getElementById("resultado-email2").innerHTML = "E-mail: cdh@direitoshumanos.mg.gov.br";
        document.getElementById("resultado-tel2").innerHTML = "Telefone: (31) 3916-7932";

        document.getElementById("resultado-instituicao3").innerHTML = "Centro Risoleta Neves de Atendimento";
        document.getElementById("resultado-endereco3").innerHTML = "Av. Amazonas, 558 - Centro, Belo Horizonte - MG, 30180-001";
        document.getElementById("resultado-site3").innerHTML = "Site: https://centrorisoleta.wixsite.com/cerna";
        document.getElementById("resultado-email3").innerHTML = "E-mail: ";
        document.getElementById("resultado-tel3").innerHTML = "Telefone: (31) 3270-3235 | 3270-3235 | 3270-3296";

        document.getElementById("resultado-instituicao4").innerHTML = "1ª Companhia da Polícia Militar Independente de Prevenção à Violência Doméstica";
        document.getElementById("resultado-endereco4").innerHTML = "Av. Augusto de Lima, 270 - Centro, Belo Horizonte - MG, 30190-001";
        document.getElementById("resultado-site4").innerHTML = "Site: https://www.policiamilitar.mg.gov.br/portal-pm/1rpm/conteudo.action?conteudo=183268&tipoConteudo=noticia";
        document.getElementById("resultado-email4").innerHTML = "E-mail: cia.pvd@pmmg.mg.gov.br";
        document.getElementById("resultado-tel4").innerHTML = "Telefone: (31) 2108-8938";

        document.getElementById("resultado-instituicao5").innerHTML = "Diretoria de Políticas para as Mulheres";
        document.getElementById("resultado-endereco5").innerHTML = "Endereço: Avenida Afonso Pena, 342, 1º Andar - Centro";
        document.getElementById("resultado-site5").innerHTML = "Site: https://prefeitura.pbh.gov.br/smasac/sudc/politicas/mulheres";
        document.getElementById("resultado-email5").innerHTML = "E-mail: dipmbh@pbh.gov.br";
        document.getElementById("resultado-tel5").innerHTML = "Telefone: (31) 3277-9753";

        document.getElementById("resultado-instituicao6").innerHTML = "Núcleo de defesa da mulher - NUDEM";
        document.getElementById("resultado-endereco6").innerHTML = "Av. Augusto de Lima, 270 - Centro, Belo Horizonte - MG, 30190-001";
        document.getElementById("resultado-site6").innerHTML = "Site: http://www.defensoriapublica.mg.gov.br";
        document.getElementById("resultado-email6").innerHTML = "E-mail: faleconosco@defensoria.mg.gov.br";
        document.getElementById("resultado-tel6").innerHTML = "Telefone: (31) 3270 3200 | (31) 3270 3202";
        break;        

        case "6":
        document.getElementById("resultado-instituicao").innerHTML = "Delegacia Especializada de Crimes Contra a Mulher";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Cecília Júlia do Prado, 255 - Centro, Betim - MG, 32510-550";
        document.getElementById("resultado-site").innerHTML = "Site: https://www.policiacivil.mg.gov.br/";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        document.getElementById("resultado-tel").innerHTML = "Telefone: (31) 3531-3056 | (31) 3531-1518";
        break;

        case "7":
        document.getElementById("resultado-instituicao").innerHTML = "Delegacia da Mulher em Caratinga";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: R. Antônia Maria Resende Fernandes, 174 - Dário Grossi, Caratinga - MG, 35300-011";
        document.getElementById("resultado-site").innerHTML = "Site:http://www.policiacivil.mg.gov.br ";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        document.getElementById("resultado-tel").innerHTML = "Telefone: (31) 3531-3056 | (31) 3531-1518";
        break;

        case "8":
        document.getElementById("resultado-instituicao").innerHTML = "Nome da Instituição:";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-site").innerHTML = "Site: ";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        document.getElementById("resultado-tel").innerHTML = "Telefone: ";
        break;

        case "9":
        document.getElementById("resultado-instituicao").innerHTML = "Nome da Instituição:";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-site").innerHTML = "Site: ";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        document.getElementById("resultado-tel").innerHTML = "Telefone: ";
        break;

        case "10":
        document.getElementById("resultado-instituicao").innerHTML = "Nome da Instituição:";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-site").innerHTML = "Site: ";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        document.getElementById("resultado-tel").innerHTML = "Telefone: ";
        break;

        case "11":
        document.getElementById("resultado-instituicao").innerHTML = "Nome da Instituição:";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-site").innerHTML = "Site: ";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        document.getElementById("resultado-tel").innerHTML = "Telefone: ";
        break;
        
        default: "Sua cidade não consta em nossos registros";
    }
}
    



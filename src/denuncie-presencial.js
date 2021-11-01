function ExibeResultado() { 
    var selecao = document.getElementById("selecaoCidade");
    var cidade = selecao.options[selecao.selectedIndex].value;

    switch (cidade) {
        case "1":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia Civil - Atendimento à Mulher em Alfenas";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Dom Silvério, nº 338, Bairro Jardim Boa Esperança V, Alfenas";
        document.getElementById("resultado-cep").innerHTML = "CEP: 37130-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: regional.alfenas@gmail.com";
        break;

        case "2":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Araguari";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua José do Patrocínio, nº 291, Bairro Centro, Araguari";
        document.getElementById("resultado-cep").innerHTML = "CEP: 39100-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: rosangela200520010@hotmail.com";
        break;

        case "3":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Araxá";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Calimério Guimarães, nº 515, Bairro Centro, Araxá";
        document.getElementById("resultado-cep").innerHTML = "CEP: 38183-184";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        break;
        
        case "4":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Barbacena";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Vitório Meneghin, nº 210, Bairro Pontilhão, Barbacena";
        document.getElementById("resultado-cep").innerHTML = "CEP: 36202-346";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: delegaciademulheres.barbacena@pc.mg.gov.br";
        break;

        case "5":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Belo Horizonte - Plantão Especializado";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida Barbacena, nº 288, Bairro Barro Preto, Belo Horizonte";
        document.getElementById("resultado-cep").innerHTML = "CEP: 30190-130";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: coordenacaodemid@gmail.com";
        break;

        case "6":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Betim";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Cecília Júlia do Prado, nº 255, Bairro Centro, Betim";
        document.getElementById("resultado-cep").innerHTML = "CEP: 32510-550";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: deopf.betim@pc.mg.gov.br";
        break;

        case "7":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Caratinga";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Antônia Maria Resende Fernandes, nº 174, Bairro Dário Grossi, Caratinga";
        document.getElementById("resultado-cep").innerHTML = "CEP: 35300-011";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: nayaratravassos@bol.com.br";
        break;

        case "8":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia Civil - Atendimento à Mulher em Cataguases";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Major Viêira, nº 324, Bairro Sereno, Cataguases";
        document.getElementById("resultado-cep").innerHTML = "CEP: 36770-060";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: secretariacataguases.pc@gmail.com";
        break;

        case "9":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Conselheiro Lafaiete";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Praça Pimentel Duarte, sem nº, Bairro Centro, Conselheiro Lafaiete";
        document.getElementById("resultado-cep").innerHTML = "CEP: 36400-079";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: mulheres.lafaiete@pc.mg.gov.br";
        break;

        case "10":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Contagem";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Manoel Teixeira de Camargos, nº 63, Bairro da Glória, Contagem";
        document.getElementById("resultado-cep").innerHTML = "CEP: 32340-040";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: mulheres.contagem@pc.mg.gov.br";
        break;

        case "11":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Coronel Fabriciano";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Albert Scharlet, nº 213, Bairro Centro, Coronel Fabriciano";
        document.getElementById("resultado-cep").innerHTML = "CEP: 35170-038";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: delegaciademulheres.cf@hotmail.com";
        break;

        case "12":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Diamantina";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida João Antunes de Oliveira, nº 284, Bairro Cazuza, Diamantina";
        document.getElementById("resultado-cep").innerHTML = "CEP: 39100-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: deam.diamantina@pc.mg.br";
        break;

        case "13":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Divinópolis";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Henrique Galvão, nº 274, Bairro Espirito Santo, Divinópolis";
        document.getElementById("resultado-cep").innerHTML = "CEP: 35500-256";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: deam.gv@pc.mg.gov.br";
        break;

        case "14":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia Civil - Atendimento à Mulher em Formiga";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Zica Frade, nº 55, Formiga";
        document.getElementById("resultado-cep").innerHTML = "CEP: 35570-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: drpc.formiga@pc.mg.gov.br";
        break;

        case "15":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Governador Valadares";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Pedro Lessa, nº 836, Bairro Lourdes, Governador Valadares";
        document.getElementById("resultado-cep").innerHTML = "CEP: 35030-440";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: informacao.deamibirite@gmail.com";
        break;

        case "16":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia Civil - Atendimento à Mulher em Guaxupé";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida Dona Floriana, nº 272, Bairro Centro, Guaxupé";
        document.getElementById("resultado-cep").innerHTML = "CEP: 37800-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: cpd.guaxupe@pc.mg.gov.br";
        break;

        case "17":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Ibirite";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida Otacílio Negrão de Lima, nº 468, Bairro Aluoto, Ibirité";
        document.getElementById("resultado-cep").innerHTML = "CEP: 32400-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: liathayde1@hotmail.com";
        break;

        case "18":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Ipatinga";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Pedras Preciosas, nº 775, Bairro Iguaçu, Ipatinga";
        document.getElementById("resultado-cep").innerHTML = "CEP: 35162-106";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        break;

        case "19":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Itabira";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida Carlos Drumond de Andrade, Bairro Centro, Itabira";
        document.getElementById("resultado-cep").innerHTML = "CEP: 35900-024";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: regional.itabira@pc.mg.gov.br";
        break;

        case "20":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia Civil - Atendimento à Mulher em Itabirito";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Emídio Quites, nº 136, Bairro Praia, Itabirito";
        document.getElementById("resultado-cep").innerHTML = "CEP: 35450-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ronni.fonseca@pc.mg.gov.br";
        break;

        case "21":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Itajubá";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Antônio Simão Mauad, nº 149 e 303 - 3º Andar, Bairro Centro, Itajubá";
        document.getElementById("resultado-cep").innerHTML = "CEP: 37500-180";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: deam.itajuba@pc.mg.gov.br";
        break;

        case "22":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Itaúna";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Praça Doná Macrina, Bairro Graças, Itaúna";
        document.getElementById("resultado-cep").innerHTML = "CEP: 35680-339";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: delmulheres.itauna@pc.mg.gov.br";
        break;

        case "23":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Ituiutaba";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida João Antunes de Oliveira, nº 284, Bairro Cazuza, Ituiutaba";
        document.getElementById("resultado-cep").innerHTML = "CEP: 39100-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: secretaria.ituiutaba@pc.mg.gov.br";
        break;

        case "24":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Janaúba";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Espinosa, nº 105, Bairro Novo Paraíso, Janaúba";
        document.getElementById("resultado-cep").innerHTML = "CEP: 39440-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: dccm.janauba@pc.mg.gov.br";
        break;

        case "25":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Januária";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida Marechal Euríco Gáspar Dutra, nº 484, Bairro Centro, Januária";
        document.getElementById("resultado-cep").innerHTML = "CEP: 39480-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: gto.fam.jf@pc.mg.gov.br";
        break;

        case "26":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia Civil - Atendimento à Mulher em João Monlevade";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Louis Ensch, nº 266, Bairro Alvorada, João Monlevade";
        document.getElementById("resultado-cep").innerHTML = "CEP: 35930-045";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: assessoriamonlevade@yahoo.com.br";
        break;

        case "27":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Juiz De Fora";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Uruguaiana, nº 94 - 2º Andar, Bairro Jardim Glória, Juiz de Fora";
        document.getElementById("resultado-cep").innerHTML = "CEP: 36015-020";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: lujanpsouza@hotmail.com";
        break;

        case "28":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia Civil - Atendimento à Mulher em Lavras";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: BR-265, nº 215, Bairro Serra Verde, Lavras";
        document.getElementById("resultado-cep").innerHTML = "CEP: 37200-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        break;

        case "29":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Manhuaçu";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida Melo Vianna, nº 222, Bairro Bom Pastor, Manhuaçu";
        document.getElementById("resultado-cep").innerHTML = "CEP: 36900-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: camilasoaresteixeira@yahoo.com.br";
        break;

        case "30":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Montes Claros";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida Vicente Guimarães, nº 381, Bairro Sagrada Família, Montes Claros";
        document.getElementById("resultado-cep").innerHTML = "CEP: 39400-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: delegaciamulheres@yahoo.com.br";
        break;

        case "31":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        case "32":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        case "33":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        case "34":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        case "35":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        case "36":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        case "37":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        case "38":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        case "39":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        case "40":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        case "41":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        case "42":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        case "43":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        case "44":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        case "45":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        case "46":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        case "47":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        case "48":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        case "49":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        case "50":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        case "51":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        case "52":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        case "53":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        case "54":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        case "55":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        case "56":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        case "57":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        case "58":
        document.getElementById("resultado-delegacia").innerHTML = "";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: ";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ";
        break;

        default: "Sua cidade não consta em nossos registros";
    }


}
    



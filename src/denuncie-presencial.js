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

        

        default: "Sua cidade não consta em nossos registros";
    }


}
    



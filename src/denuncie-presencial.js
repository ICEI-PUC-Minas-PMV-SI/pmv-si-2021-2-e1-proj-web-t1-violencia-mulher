function ExibeResultado() { 
    var selecao = document.getElementById("selecaoCidade");
    var cidade = selecao.options[selecao.selectedIndex].value;

    switch (cidade) {
        case "1":
        document.getElementById("resultado-delegacia").innerHTML = "Nome da delegacia";
        break;

        default: "Sua cidade não consta em nossos registros";
    }


}
    



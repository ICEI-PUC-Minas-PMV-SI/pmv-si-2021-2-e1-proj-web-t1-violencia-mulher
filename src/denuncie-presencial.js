document.getElementById('cidades').onclick = function() {
    var cidade = datalist.option.selected.value;

    switch (cidade.value) {
        case "Alfenas":
        document.getElementById("resultado-delegacia").innerHTML = "Nome da delegacia";
        break;

        default: "Sua cidade não consta em nossos registros";
    }


}
    



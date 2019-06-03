function gerarComFor() {
    var i = ["Aegir", "Aud", "Balder"]
    for(var j = 0; j < 3; j++){
        alert(i[j])
    }
}

function gerarComForeach() {
    var i = ["Aegir", "Aud", "Balder"]
    function gerar(repetiçao) {
        alert(repetiçao)
    }

    i.forEach(gerar)
}

function gerarComWhile() {
    var i = ["Aegir", "Aud", "Balder"]
    var x = 0;
    while(x < i.length) {
        alert(i[x])
        x++
    }
}

function gerarComDoWhile() {
    var i = ["Aegir", "Aud", "Balder"]
    var x = 0;
    do {
        alert(i[x])
        x++
    }
    while(x < i.length)
}
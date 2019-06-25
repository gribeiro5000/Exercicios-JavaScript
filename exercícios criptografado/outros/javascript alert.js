function darAlert() {
    var x = "ola mundo";

    for(var i = 0; i < x.length; i++) {
        if(x[i] != " ")
        alert(x[i]);
    }
}

function darAlertDoCampo() {
    var x = document.getElementById("valor").value;

    for(var i = 0; i < x.length; i++) {
        if(x[i] != " ")
        alert(x[i]);
    }
}

function abrirJanela() {
    window.open("https://www.google.com/", "_blank", "width=350, height=400")
}

function abrirJanelaComScrollbars() {
    window.open("https://www.google.com/", "_blank", 
    "menubar=yes, scrollbars=yes, width=300, height=200")
}
function olamundo() {
    alert("Olá Mundo")
}

function somatoria(){
    var q = 10;
    var s = 40;
    var x = q + s;
    alert("a some de " + q + " com " + s + " é " + x)
}

function exibirNome() {
    var x = document.getElementById("nome").value;
    alert("O nome é " + x)
}

function letrasDoNome() {
    var x = document.getElementById("nome").value;
    var numeroDeLetras = x.length;
    alert("O nome " + x + " contem " + numeroDeLetras + " letras")
}
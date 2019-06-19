var nomes = [];
var i = 0;
function colocarNoArray() {
    nomes.push(document.getElementById("valor").value)
    document.getElementById("elementos").innerHTML += "<li>" + nomes[i] + "</li>"
    i++
}
var numeros = [];
var i = 0;
function colocarNoArray() {
    numeros.push(document.getElementById("valor").value)
    if(numeros[i] % 2 == 0){
        document.getElementById("elementos").innerHTML += "<li style='color:deeppink'>" + numeros[i] + "</li>"
        i++
    }
    else{
        document.getElementById("elementos").innerHTML += "<li>" + numeros[i] + "</li>"
        i++
    }
}
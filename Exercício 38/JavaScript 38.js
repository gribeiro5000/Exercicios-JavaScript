document.addEventListener("DOMContentLoaded", function mostrarNomes(){
    var nomes = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr']
    function escreverNomes(nome) {
        document.getElementById("nomes").innerHTML += "<li>" + nome + "</li>"
    }
    nomes.forEach(escreverNomes)
})
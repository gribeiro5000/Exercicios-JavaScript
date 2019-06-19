var arrayRepetiçao = ["repetição ","repetição ","repetição ","repetição ","repetição "]
function escrever(repetiçao) {
    document.getElementById("resultado").innerHTML += repetiçao
} 

document.addEventListener("DOMContentLoaded",
function escreverRepetição() {
    arrayRepetiçao.forEach(escrever)
})
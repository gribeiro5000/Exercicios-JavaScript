document.addEventListener("DOMContentLoaded", 
function contagemPar() {
    for(var i = 1; i <= 20; i++){
        if(i % 2 == 0) {
            document.getElementById("resultado").innerHTML += i + "<br></br>"
        }
    }
})
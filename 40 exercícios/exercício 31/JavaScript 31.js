document.addEventListener("DOMContentLoaded", 
function tabuada() {
    for(var nt = 1; nt <= 10; nt++) {
        for(var n = 1; n <= 10; n++) {
            document.getElementById("resultado").innerHTML += nt + " x " + n + " = " + nt * n + "<br></br>";
        }
    }
})
document.addEventListener("DOMContentLoaded", function x(){
    var i = 1;
    setInterval(function contador() {
        if(i == 5) {
            document.getElementById("contador").innerHTML = "<h1>" + i + "</h1>";
            i = 1;
        }
        else {
            document.getElementById("contador").innerHTML = "<h1>" + i + "</h1>";
            i++;
        }
    }, 300)
})
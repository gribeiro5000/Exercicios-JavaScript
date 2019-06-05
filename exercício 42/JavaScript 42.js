document.addEventListener("DOMContentLoaded" , function x() {
    var posiçao = 0;
    var imagem = "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-1.png";
    document.getElementById("urso").innerHTML = 
    "<img src='https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-1.png' style='position: absolute; left:" + posiçao + "px;'></img>";
    posiçao += 10;
    setInterval(function passeioDoUrso(){
        if(imagem == "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-1.png"){
            document.getElementById("urso").innerHTML = 
            "<img src='https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-2.png' style='position: absolute; left:" + posiçao + "px;'></img>";
            imagem = "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-2.png"
            posiçao += 10; 
        }
        else if(imagem == "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-2.png"){
            document.getElementById("urso").innerHTML = 
            "<img src='https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-3.png' style='position: absolute; left:" + posiçao + "px;'></img>";
            imagem = "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-3.png"
            posiçao += 10; 
        }
        else if(imagem == "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-3.png"){
            document.getElementById("urso").innerHTML = 
            "<img src='https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-1.png' style='position: absolute; left:" + posiçao + "px;'></img>";
            imagem = "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-1.png"
            posiçao += 10; 
        }

    }, 500)
})
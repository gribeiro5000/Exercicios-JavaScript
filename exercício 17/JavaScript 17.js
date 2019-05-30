function soma(x, y) {
    var regex = RegExp("[0-9]");
    if(regex.test(x) != true){
        x = 0;
    }
    if(regex.test(y) != true){
        y = 0;
    }
    var i = parseInt(x) + parseInt(y);
    alert("A soma de " + x + " e " + y + " é " + i)
}
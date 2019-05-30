function multiplicar(x, y) {
    var regex = RegExp("[0-9]")
    if(regex.test(x) && regex.test(y)){
        var i = x * y;
        alert("O resultado da multiplicação é " + i)
    }
    else {
        alert("Valor inserido não é um número")
    }
}
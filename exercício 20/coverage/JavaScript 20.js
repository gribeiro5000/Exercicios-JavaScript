function multiplicar(x, y) {
    var regex = RegExp("[0-9]")
    if(regex.test(x) && regex.test(y)){
        return x * y;
    }
    else {
        return "Valor inserido não é um número"
    }
}
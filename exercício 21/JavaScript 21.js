function valorDesconto(x) {
    var regex = RegExp("[0-9]")
    if(regex.test(x)){  
        return x * 0.05;
    }
    else {
        return "o valor digitado não é um número"
    }
}
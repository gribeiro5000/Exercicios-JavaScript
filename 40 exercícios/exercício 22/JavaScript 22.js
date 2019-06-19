function maiorDeIdade(x) {
    var regex = RegExp("[0-9]");
    if (regex.test(x)){
        if(2019 - x < 18){
            return "menor de idade"
        }
        else {
            return "maior de idade"
        }
    }
    else {
        return "o valor digitado não é um número"
    }
}
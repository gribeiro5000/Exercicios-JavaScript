function parOuImpar(x) {
    var regex = RegExp("[0-9]")
    if (regex.test(x)){
        if (x % 2 == 0) {
            return "O número é par"
        }
        else if (x % 3 == 0 || x / 1 == 1) {
            return "O número é impar"
        }
    }
    else {
        return "O valor digitado não é um número"
    }
}
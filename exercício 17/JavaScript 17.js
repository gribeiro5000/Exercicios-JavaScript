function soma(x, y) {
    var regex = RegExp("[0-9]");
    if(regex.test(x) != true || regex.test(y) != true){
        return  0;
    }
    else
    {
        return parseInt(x) + parseInt(y);
    }
}

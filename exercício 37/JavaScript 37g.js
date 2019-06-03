function exibirDeFormaDecrescente() {
    var j = [5, 7, 1, 8, 9]
    var x = j.sort()
    var p = 4;
    for (var i = 0; i < x.length; i++){
        j[i] = x[p]
        p--
    }
    alert(j);
}
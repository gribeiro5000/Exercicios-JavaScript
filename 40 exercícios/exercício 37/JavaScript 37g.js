function sortfunction(a, b) {
    return b - a
}

function exibirDeFormaDecrescente() {
    var j = [5, 7, 1, 8, 9]
    j.sort(sortfunction)
    alert(j);
}
function cpfSemPontuação() {
    var x = document.getElementById("cpf").value;
    var y = "";
    for(var i = 0; i < x.length; i++)
    {
        if(x[i] != ".")
        {
            y += x[i]
        }
    }
    alert(y);
}
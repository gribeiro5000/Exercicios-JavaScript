function proximoMes() {
    var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro",
    "Outubro", "Novembro", "Dezembro"]

    for(var i = 0; i < meses.length; i++) {
        if(document.getElementById("mes").value == meses[11]){
            alert("O próximo Mês é " + meses[0])
            break;
        }
        if(document.getElementById("mes").value == meses[i]) {
            alert("O próximo Mês é " + meses[i + 1])
            break;
        }
    }
}
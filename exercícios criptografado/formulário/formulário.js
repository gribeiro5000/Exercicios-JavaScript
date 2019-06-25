function validarTudo() {

    var nome = document.getElementById("nome").value;
    var regex = /[A-Za-z]/;
    if(regex.test(nome) == false){
        alert("O campo 'Nome completo' não foi preenchido corretamente")
    }

    var email = document.getElementById("email").value;
    var regex = /([\w\d._-]+)@(\w+).(\w{2,3})/;
    if(regex.test(email) == false){
        alert("O campo 'E-mail' não foi preenchido corretamente")
    }

    var sexo = document.getElementsByName("genero");
    if(sexo[0].checked == false && sexo[1].checked == false) {
        alert("Um dos sexos deve ser selecionado")
    }

    var estadoCivil = document.getElementsByName("estadoCivil");
    if(estadoCivil[0].checked == false && estadoCivil[1].checked == false && estadoCivil[2].checked == false
        && estadoCivil[3].checked == false) {
        alert("Uma das opções de estado civil deve ser selecionada")
    }

    var residencia = document.getElementsByName("residencia");
    var herança = document.getElementsByName("herança");
    var automovel = document.getElementsByName("automovel");
    var eletrodomesticos = document.getElementsByName("eletrodomesticos"); 
    if(residencia[0].checked == false && herança[0].checked == false && automovel[0].checked == false
        && eletrodomesticos[0].checked == false) {
        alert("Uma das opções de bens que possui deve ser selecionada")
    }

    if(document.getElementById("idade").value == ""){
        alert("Uma das idades deve ser selecionada")
    }

    if(document.getElementById("hobbies").value == ""){
        alert("Um dos hobbies deve ser selecionada")
    }
}
function inserirSemPush() {
    var w = ["Aegir", "Aud", "Balder"];
    var j = ["Loki", "Odin", "Frey"];
    var t = 3;
    for(var x = 0; x < 3; x++){
        w[t] = j[x]
        t++
    }
    for(var x = 0; x < w.length; x++){
        alert(w[x]);
    }
}
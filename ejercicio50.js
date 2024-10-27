function verificarAlarma() {
    let temperatura = parseFloat(prompt("Ingrese la temperatura"));
    let presion = parseFloat(prompt("Ingrese la presion"));

    if (presion > 200 || temperatura > 100) {
        alert("Alarma");
    }else{
        alert("Normal");
    }
}

verificarAlarma();
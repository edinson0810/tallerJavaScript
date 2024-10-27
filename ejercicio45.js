function esPositivo() {
    let numero = parseInt(prompt("Ingrese el numero"));
    if (numero > 0 && numero < 100) {
        alert("El numero es positivo y menor a 100")
    } else {
        alert("El numero no cumple las condiciones")
    }
}

esPositivo();
let numeroTarjeta = prompt("Ingrese el numero de la tarjeta");

function verificarTarjeta(tarjeta) {
    if (tarjeta.length !== 16) {
        return("Ingrese un numero valido")
    }


let primeroDigitos = tarjeta.substring(0, 4);

if (tarjeta.startsWith("4")) {
    return"La tarjeta es Visa";
}

let primeroDosDigitos = parseInt(tarjeta.substring(0, 2));
let primeroCuatroDigitos = parseInt(primeroDigitos);

if ((primeroDosDigitos >= 51 && primeroDosDigitos <= 55) || (primeroCuatroDigitos >= 2221 && primeroCuatroDigitos <=2720)) {
    return "La tarjeta es mastercad"
}
return "Tipo de tarjeta desconocida"
}



let resultado = verificarTarjeta(numeroTarjeta);

alert(resultado)
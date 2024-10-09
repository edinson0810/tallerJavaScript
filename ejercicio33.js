let añoNacimientoMadre = parseInt(prompt("Ingrese el año de nacimiento de la madre"));
let añoNacimientoHijo = parseInt(prompt("Ingrese el año de nacimenot del hijo"));

if (isNaN(añoNacimientoMadre) || isNaN(añoNacimientoHijo)){
    alert("Por favor ingrese un año valido")
}else if (añoNacimientoHijo > añoNacimientoMadre){
let edadMadre = añoNacimientoHijo - añoNacimientoMadre;
alert ("La madre tenia " + edadMadre + " años cuando dio a luz.")
}else{
    alert("El año de nacimiento del hijo debe ser mayor al de la madre")
}







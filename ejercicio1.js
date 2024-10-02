let edad = prompt("Ingrese su edad");
edad = parseInt(edad);

if (isNaN(edad) || edad <= 0){
    alert ("Ingrese un numero valido");
} else {
if (edad > 17  ) {
    alert("Es mayor de edad ");
} else  {
    alert("Es menor de edad ");}
}



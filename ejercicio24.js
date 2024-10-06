const regex = /^-?\d+(\.\d+)(e-?\d+)?$/;
let numero = prompt("Ingrese un numero");

if (regex.test(numero) === true) {
alert("El numero contiene un punto flotante");
}else{
    alert("El numero no contiene un numero flotante")
}
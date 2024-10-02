let numero1 = parseInt(prompt("ingrese el primer numero"));
let numero2 = parseInt(prompt("ingrese el segundo numero"));

if (numero2 === 0) {
    alert("No se puede dividir en cero, cambie el divisor:");
} else {
    let resultado = numero1 / numero2;
    alert("El resultado de la division es: " + resultado)
}



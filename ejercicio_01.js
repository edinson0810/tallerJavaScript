let a = parseFloat(prompt("ingrese numero 1"));
let b = parseFloat(prompt("Ingrese numero 2"));

// funcion expresadas
const mayor = (a, b) => {
    // operador ternario
a < b ? console.log(`El numero ${b} es el mayor`)
: console.log(`El numero ${a} es el mayor`);
}
// llamar la variable
mayor(a,b);
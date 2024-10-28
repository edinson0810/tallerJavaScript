let a = parseFloat(prompt("Ingrese a"));
let b = parseFloat(prompt("Ingrese a"));

function calculadora(a, b) {
    let suma = a + b;
    let res = a - b;
    let mul = a * b;
    let div;
    if (b == 0) {
        alert("No podemos dividir por 0");
        div = 0;
    }else{
        div = a / b ;
    }
 alert(`
    suma = ${suma}
    resta = ${res}
    mul = ${mul}
    div = ${div}`);
}

let resultado = calculadora(a,b);

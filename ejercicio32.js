let compra1 = parseFloat(prompt("Ingrese el valor de la primera compra"));
let compra2 = parseFloat(prompt("Ingrese el valor de la segunda compra"));
let compra3 = parseFloat(prompt("Ingrese el valor de la tercera compra"));
let compra4 = parseFloat(prompt("Ingrese el valor de la cuarta compra"));
let compra5 = parseFloat(prompt("Ingrese el valor de la quinta compra"));


function calculo(compra1,compra2,compra3,compra4,compra5) {
    let descuentocompra1 = compra1 * 0.05;
    let descuentocompra2 = compra2 * 0.05;
    let descuentocompra4 = compra4 * 0.02;
    let descuentocompra5 = compra5 * 0.02;
    let pagarcompra1 =  compra1 - descuentocompra1;
    let pagarcompra2 =  compra2 - descuentocompra2;
    let pagarcompra4 = compra4 - descuentocompra4;
    let pagarcompra5 = compra5 - descuentocompra5;
    let Totalcompra = pagarcompra1 + pagarcompra2 + compra3 + pagarcompra4 + pagarcompra5;
    alert(`valor a pagar por la primera compra es: ${pagarcompra1}
    Valor a pagar por la segunda compra es: ${pagarcompra2}
    Valor a pagar por la tercera compra es: ${compra3}
    Valor a pagar por la cuarta compra es: ${pagarcompra4}
    Valor a pagar por la quinta compra es: ${pagarcompra5}
    Total a pagar es de : ${Totalcompra}`)
}

calculo(compra1,compra2,compra3,compra4,compra5);


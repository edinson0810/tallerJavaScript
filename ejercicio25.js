let costo = parseFloat(prompt("Ingrese el costo del medicamento"));
const descuento = 0.1;
console.log(costo);

function calculo(c, d) {
    let valorDescuento = (c * d);
    let valorPagar = (c - valorDescuento);
    alert(`El descuento del 10% es: ${valorDescuento}
    El valor a pagar es: ${valorPagar}`)
}

calculo( costo, descuento)
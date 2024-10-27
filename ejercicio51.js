function pagoRestaurante() {
    let consumo = parseFloat(prompt("Ingrese el valor total a pagar"));
    let total = consumo > 130000 ? consumo * 0.85 : consumo;
    alert(`El total a pagar es:  ${total}`);
}
pagoRestaurante();
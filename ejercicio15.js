let radio = parseFloat(prompt("Ingrese el radio de la circuferencia"));


function calculo(r) {
    let longitud = 2 * Math.PI *r;
    let area = Math.PI *r ** 2;
    alert(`La longuitud es: ${longitud},  el area es :${area}`)
}

calculo(radio)
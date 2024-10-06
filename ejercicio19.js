let radio = parseFloat(prompt("Ingrese el radio del cilindro"));
let altura = parseFloat(prompt("Ingrese la altura del radio"));


function calculo(r, a) {
    let area = 2 * Math.pI * r * (r + a)
    let volumen = Math.PI * r ** 2 * a;
    alert(`el area del cilindro es: ${area}
        El volumen del cilindro es: ${volumen}`)
}

calculo(radio, altura);
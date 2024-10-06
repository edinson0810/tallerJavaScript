let base = parseFloat(prompt("Ingrese la base "));
let altura = parseFloat(prompt("Ingrese la altura "));

function area(a, b) {
    let areaT = ( a * b) / 2;
    alert(`El area del triangulo es: ${areaT}`)
}

area(base,altura);
let minutos = parseFloat(prompt("¿Cuantos minutos utilizo"));

function calculdo(m) {
const valorMinuto = 355;
const IVA = 0.2;

let contoTotal =  m * valorMinuto + m * valorMinuto * IVA;

alert(`El costo total de la llamada es: ${contoTotal}`)
}
calculdo(minutos);
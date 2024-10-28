let nombre = prompt("Ingrese su Nombre");
let horasTrabajadas = parseFloat(prompt("Ingrese el numero de horas trabajadas"));
const pagoHora = 5000;

function calculo( horasTrabajadas,pagoHora) {
    let NetoPagar = horasTrabajadas * pagoHora;
    alert(`${nombre} Tiene un sueldo de:  ${NetoPagar}`)
}

calculo(horasTrabajadas,pagoHora);
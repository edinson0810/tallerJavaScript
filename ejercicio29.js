let examen1 = parseFloat(prompt("Ingrese la Nota del primer examen. siendo 1 el menor y 5 la mayor calificacion"));
let examen2 = parseFloat(prompt("Ingrese la Nota del segundo examen. siendo 1 el menor y 5 la mayor calificacion"));
let examen3 = parseFloat(prompt("Ingrese la Nota del tercer examen. siendo 1 el menor y 5 la mayor calificacion"));
let examen4 = parseFloat(prompt("Ingrese la Nota del cuarto examen. siendo 1 el menor y 5 la mayor calificacion"));

function calculo(examen1,examen2,examen3,examen4) {
    let porcentajeexamen1 = examen1 * 0.25;
    let porcentajeexamen2 = examen2 * 0.25;
    let porcentajeexamen3 = examen3 * 0.25;
    let porcentajeexamen4 = examen4 * 0.25;
    let sumaporcentaje = porcentajeexamen1 + porcentajeexamen2 + porcentajeexamen3 + porcentajeexamen4;
    alert(`El porcentaje del examen 1 es: ${porcentajeexamen1}
        El porcentaje del examen 2 es: ${porcentajeexamen2}
        El porcentaje del examen 3 es: ${porcentajeexamen3}
        El porcentaje del examen 4 es: ${porcentajeexamen4}
        El promedio de las calificaciones es: ${sumaporcentaje}`
        )
}

calculo(examen1,examen2,examen3,examen4);
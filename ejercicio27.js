let parcial1 = parseFloat(prompt("Ingrese la nota del primer parcial de 1 a 5"));
let parcial2 = parseFloat(prompt("Ingrese la nota del segundo parcial de 1 a 5"));
let parcial3 = parseFloat(prompt("Ingrese la nota del tercer parcial de 1 a 5"));
let examen_final = parseFloat(prompt("Ingrese la nota de su examen de 1 a 5"));
let trabajo_final = parseFloat(prompt("Ingrese la nota del trabajo final de 1 a 5"));

function calculo(parcial1,parcial2,parcial3) {
    let promedidoparcial = (parcial1 + parcial2 + parcial3) / 3;
    let porcentajeparcial = promedidoparcial * 0.55;
    let porcetajeExamenFinal = examen_final * 0.30;
    let porcetajeTrabajaFinal = trabajo_final * 0.15;
    let NotaFinal = porcentajeparcial + porcetajeExamenFinal + porcetajeTrabajaFinal;
    alert(`el promedio de los parciales  es: ${porcentajeparcial}
        El porcentaje del examen final es: ${porcetajeExamenFinal}
        El porcentaje del trabajo final es:${porcetajeExamenFinal}
        Su Nota Final es:  ${NotaFinal}`)

}

calculo(parcial1,parcial2,parcial3,examen_final,trabajo_final);
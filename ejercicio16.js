let distancia = parseFloat(prompt("Distancia en KM"));
let tiempo = parseFloat(prompt("Tiempo en minutos"));

function calculo(d, t) {
    let distanciaMetros = d * 1000;
    let tiemposegundos = t * 60;
    let velocidad = distanciaMetros / tiemposegundos;
    alert(`La velocidad es: ${velocidad} m/s`)
}

calculo(distancia,tiempo)
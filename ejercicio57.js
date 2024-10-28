function asignarCalificacion() {
    let calificacion = parseFloat(prompt("Ingrese la caificacion de (0-10):"));

    let resultado = calificacion >= 9.1 ? "Excelente":
    calificacion >= 8.1 ? "Muy bien" :
    calificacion >= 7.5 ? "Bien" :
    "No Aprobado";

alert(`Calificación: ${resultado}`);
}
asignarCalificacion(); 

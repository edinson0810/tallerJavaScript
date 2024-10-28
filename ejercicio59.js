function seleccionarPostulanteBasquetbol() {
    let edad = parseInt(prompt("Ingrese la edad del postulante:"));
    let estatura = parseFloat(prompt("Ingrese la estatura del postulante (en cm):"));
    let peso = parseFloat(prompt("Ingrese el peso del postulante (en kg):"));
  
    if (edad <= 19 && estatura > 175 && peso >= 75 && peso <= 80) {
      alert("El postulante es elegible para el equipo.");
    } else {
      alert("El postulante no cumple con los requisitos.");
    }
  }
  seleccionarPostulanteBasquetbol();
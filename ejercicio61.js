function analizarNotas() {
    let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas:"));
    let notas = [];
    for (let i = 0; i < cantidadNotas; i++) {
      let nota = parseInt(prompt(`Ingrese la nota del alumno ${i + 1} (1-100):`));
      notas.push(nota);
    }
  
    let notaAlta = Math.max(...notas);
    let notaBaja = Math.min(...notas);
    let cantidadMaxima = notas.filter(nota => nota === 100).length;
    let rangoA = notas.filter(nota => nota < 100 && nota >= 90).length;
    let rangoB = notas.filter(nota => nota < 90 && nota >= 80).length;
    let rangoC = notas.filter(nota => nota < 80 && nota >= 70).length;
    let rangoD = notas.filter(nota => nota < 70 && nota >= 60).length;
  
    alert(`Nota más alta: ${notaAlta}\nNota más baja: ${notaBaja}\nCantidad con nota 100: ${cantidadMaxima}\nRango A: ${rangoA}\nRango B: ${rangoB}\nRango C: ${rangoC}\nRango D: ${rangoD}`);
  }
  analizarNotas();
  
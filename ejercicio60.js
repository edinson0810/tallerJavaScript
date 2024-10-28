function calcularPagoCursos() {
    let cantidadCursos = parseInt(prompt("Ingrese la cantidad de cursos:"));
    let costoPorCurso = cantidadCursos < 6 ? 2000000 : 1200000;
    
    let total = cantidadCursos * costoPorCurso;
    alert(`El total a pagar es: $${total}`);
  }
  calcularPagoCursos();
function mostrarTriangulo() {
    let altura = parseInt(prompt("Ingrese la altura del triángulo:"));
    let triangulo = "";
    for (let i = 1; i <= altura; i++) {
      triangulo += "*".repeat(i) + "\n";
    }
    alert(triangulo);
  }
  mostrarTriangulo();
  
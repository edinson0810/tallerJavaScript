function mostrarTrianguloEnConsola() {
    let altura = parseInt(prompt("Ingrese la altura del triángulo:"));
    for (let i = 1; i <= altura; i++) {
      console.log("*".repeat(i));
    }
  }
  mostrarTrianguloEnConsola();
  
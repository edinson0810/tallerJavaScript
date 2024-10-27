function mostrarImparesHasta() {
    let numero = parseInt(prompt("Ingrese un número entero positivo:"));
    let impares = [];
    for (let i = 1; i <= numero; i += 2) {
      impares.push(i);
    }
    alert(impares.join(", "));
  }
  mostrarImparesHasta();
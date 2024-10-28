function cuentaAtras() {
    let numero = parseInt(prompt("Ingrese un número entero positivo:"));
    let cuenta = [];
    for (let i = numero; i >= 0; i--) {
      cuenta.push(i);
    }
    alert(cuenta.join(", "));
  }
  cuentaAtras();
  
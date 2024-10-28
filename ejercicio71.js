function esPrimo() {
    let numero = parseInt(prompt("Ingrese un número entero:"));
    let esPrimo = numero > 1 && Array.from({ length: numero - 2 }, (_, i) => i + 2).every(i => numero % i !== 0);
    alert(esPrimo ? "El número es primo." : "El número no es primo.");
  }
  esPrimo();
  
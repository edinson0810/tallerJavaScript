function calcularPresupuestoPintura() {
    let metros = parseFloat(prompt("Ingrese los metros cuadrados a pintar:"));
    let precioPorMetro = 15000; // Suponiendo precio por m2
    let total = metros * precioPorMetro;
    alert(`El total a cobrar es: $${total}`);
  }
  calcularPresupuestoPintura()
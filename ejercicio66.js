function calcularInversion() {
    let cantidad = parseFloat(prompt("Ingrese la cantidad a invertir:"));
    let interes = parseFloat(prompt("Ingrese el interés anual (%):")) / 100;
    let anos = parseInt(prompt("Ingrese el número de años:"));
  
    for (let i = 1; i <= anos; i++) {
      cantidad += cantidad * interes;
      alert(`Año ${i}: $${cantidad.toFixed(2)}`);
    }
  }
  calcularInversion();
  
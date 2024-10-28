function calcularMontoVenta() {
    let libros = parseInt(prompt("Ingrese la cantidad de libros vendidos:")) || 0;
    let cuadernos = parseInt(prompt("Ingrese la cantidad de cuadernos vendidos:")) || 0;
    let lapiceros = parseInt(prompt("Ingrese la cantidad de lapiceros vendidos:")) || 0;
    
    let total = (libros * 10000) + (cuadernos * 7550) + (lapiceros * 5550);
    alert(`El total de la venta es: $${total}`);
  }
  calcularMontoVenta();
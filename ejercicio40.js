function calcularEdad() {
    let anioNacimiento = parseInt(prompt("Ingrese su año de nacimiento:"));
    let anioActual = new Date().getFullYear();
    let edad = anioActual - anioNacimiento;
    alert(`Su edad es: ${edad} años`);
  }
  calcularEdad();
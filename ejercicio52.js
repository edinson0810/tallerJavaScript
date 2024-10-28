function calcularPagoTrabajador() {
    let tipoEmpleado = prompt("Ingrese el tipo de empleado (planta/administrativo):").toLowerCase();
    let horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas:"));
    
    let pagoHora = tipoEmpleado === "planta" ? 20000 : tipoEmpleado === "administrativo" ? 10000 : 0;
    let total = horasTrabajadas * pagoHora;
  
    if (pagoHora > 0) {
      alert(`El pago total es: $${total}`);
    } else {
      alert("Tipo de empleado no válido");
    }
  }
  calcularPagoTrabajador();
  
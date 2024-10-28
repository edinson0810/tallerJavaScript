function calcularArea() {
    let figura = prompt("Seleccione la figura (T para Triángulo, C para Círculo):").toUpperCase();
    if (figura === "T") {
      let base = parseFloat(prompt("Ingrese la base del triángulo:"));
      let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
      let area = (base * altura) / 2;
      alert(`Área del triángulo: ${area}`);
    } else if (figura === "C") {
      let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
      let area = Math.PI * radio * radio;
      alert(`Área del círculo: ${area}`);
    } else {
      alert("Opción inválida");
    }
  }
  calcularArea();
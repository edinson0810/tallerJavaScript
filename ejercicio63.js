function mostrarAniosCumplidos() {
    let edad = parseInt(prompt("Ingrese su edad:"));
    for (let i = 1; i <= edad; i++) {
      alert(`Año ${i}`);
    }
  }
  mostrarAniosCumplidos();
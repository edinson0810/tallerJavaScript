function mostrarTablaMultiplicar() {
    for (let i = 1; i <= 10; i++) {
      alert(`Tabla del ${i}:`);
      for (let j = 1; j <= 10; j++) {
        alert(`${i} x ${j} = ${i * j}`);
      }
      alert("\n");
    }
  }
  mostrarTablaMultiplicar();
  
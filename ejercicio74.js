function mostrarEco() {
    let entrada;
    do {
      entrada = prompt("Escriba algo (escriba 'salir' para terminar):");
      if (entrada.toLowerCase() !== "salir") {
        console.log(entrada);
      }
    } while (entrada.toLowerCase() !== "salir");
  }
  mostrarEco();
  
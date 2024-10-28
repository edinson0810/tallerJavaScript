function contarLetraEnFrase() {
    let frase = prompt("Ingrese una frase:");
    let letra = prompt("Ingrese una letra:");
    let ocurrencias = frase.split("").filter(caracter => caracter === letra).length;
    alert(`La letra "${letra}" aparece ${ocurrencias} veces en la frase.`);
  }
  contarLetraEnFrase();
  
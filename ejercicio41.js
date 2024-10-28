function invertirFrase() {
    let frase = prompt("Ingrese una frase que lo identifique como programador:");
    let fraseInvertida = frase.split("").reverse().join("");
    alert(`Frase invertida: ${fraseInvertida}`);
  }
  invertirFrase();
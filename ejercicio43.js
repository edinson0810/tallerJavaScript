function detectarComillas() {
    let texto = prompt("Ingrese un texto con comillas dobles:");
    let regex = /"(?:[^"\\]|\\.)*"/;
    let resultado = regex.test(texto);
    alert(`¿El texto contiene comillas dobles válidas?: ${resultado}`);
  }
  detectarComillas();
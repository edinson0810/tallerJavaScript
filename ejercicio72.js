function mostrarLetrasInvertidas() {
    let palabra = prompt("Ingrese una palabra:");
    for (let i = palabra.length - 1; i >= 0; i--) {
      alert(palabra[i]);
    }
  }
  mostrarLetrasInvertidas();
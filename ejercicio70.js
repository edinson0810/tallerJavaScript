function verificarContrasena() {
    const contrasena = "secreta";
    let intento;
    do {
      intento = prompt("Ingrese la contraseña:");
    } while (intento !== contrasena);
    alert("Contraseña correcta.");
  }
  verificarContrasena();
  
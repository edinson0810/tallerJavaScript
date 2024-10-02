const contraseñaGuardada = "Segura123";
function esAlfanumerico(texto) {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.toLocaleString(texto);
}
let contraseñaUsuario = prompt("Ingrese la contraseña");
if (!esAlfanumerico(contraseñaUsuario)){
    alert("La contraseña solo debe contener caracteres alfanumericos");
} else {
if (contraseñaGuardada.toLowerCase()===contraseñaUsuario.toLowerCase()) {
    alert("La contraseña es correcta.");
} else {
    alert("La contraseña es incorrecta."); }
}
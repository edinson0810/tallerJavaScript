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

// let contrasena = "contrasena1234";

// while (tru) {
//     let contraseDos = prompt("Ingrese la contraseña");
//     if (/^[a-zA-Z0-9]+$/.test(contraseDos)){
//         if (contraseDos.toLowerCase()===contrasena.toLowerCase()) {
//             alert("Contraseña correcta");
//             break;
//         }else {
//             alert("contraseña incorrecta");
//         }
//     }else{
//         alert("Por favor ingrese solo valores alfanumerico");
//     }
// }
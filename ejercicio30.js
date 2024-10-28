let contraseña = prompt("Ingrese la contraseña");

function comprobarcontraseña(contraseña) {
    if (contraseña.length < 8 || contraseña.length > 12){
        return "La contraseña debe tener entre 8 y 12 caracteres"
}
let tieneMayuscula = /[A-Z]/.test(contraseña);
let tieneMinuscula = /[a-z]/.test(contraseña);
let tieneNumero = /[0-9]/.test(contraseña);

if (tieneMayuscula && tieneMinuscula && tieneNumero){
return "La contraseña es Fuerte.";
} else {
    return "La contraseña debe tener al menos una mayuscula, una miniscula y un digito."
    }
}

let resultado = comprobarcontraseña(contraseña);
alert(resultado);

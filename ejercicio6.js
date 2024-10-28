
let nombre = prompt("Ingrese su nombre");
let sexo = prompt("Ingrese su sexo(F para femenino, M para masculino)").toUpperCase();

let grupo;
if ((sexo === "F" && nombre.toLocaleUpperCase() <"M") 
    || 
(sexo=== "M" && nombre.toLocaleUpperCase() >"N")){
grupo= "Grupo A";
} else {
    grupo = "Grupo B";
} 
alert(`Usted pertenece al ${grupo}`);
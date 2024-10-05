let edad = parseInt(prompt("Ingrese su edad"));
let sueldo = parseFloat(prompt("Ingrese su sueldo"));

if ( edad < 0 || sueldo < 0){
    alert("Valores invalidos")
} else {
    if (edad > 16 && sueldo >=1000){
    alert( "Debe Tributar")
} else{
    alert("No debe tributar")
}
}
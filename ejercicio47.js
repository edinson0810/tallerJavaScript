function esMayor() {
    let nume1 = parseFloat(prompt("Ingrese el primer numero"));
    let nume2 = parseFloat(prompt("Ingrese el segundo numero"));
    let nume3 = parseFloat(prompt("Ingrese el tercer numero"));

if (nume1 === nume2 && nume2 === nume3) {
    alert("Los numero son iguales")
}else {
    let mayor = Math.max(nume1, nume2, nume3);
    let menor = Math.min(nume1, nume2, nume3);
    alert(`El numero mayor es: ${mayor}, El numero menor es: ${menor}`)};
    
}
esMayor();
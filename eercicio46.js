function esMayor() {
    let nume1 = parseFloat(prompt("Ingrese el primer numero"));
    let nume2 = parseFloat(prompt("Ingrese el segundo numero"));
    let nume3 = parseFloat(prompt("Ingrese el tercer numero"));
    
    let mayor = Math.max(nume1, nume2, nume3);
    alert(`El numero mayor es: ${mayor}`)
}

esMayor();
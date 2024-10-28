let numero = [10 , 25, 99, 1, 75];

function elMayor(arreglo) {
    let mayor = arreglo[0];
    for(let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
    if (mayor < arreglo[i]) {
        mayor = arreglo[i];
    }
        
    }
    console.log(`El numero mayor es ${mayor}`);
    
}

elMayor(numero)
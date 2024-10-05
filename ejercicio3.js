let dividendo, divisor, resultado;
try {
    dividendo = parseInt(prompt("Ingrese el dividendo"));
    divisor = parseInt(prompt("Ingrese el divisor"));
    if ( divisor === 0){
        throw new error (`El divisor ${divisor}, no se puede realizar la division`);
    }

    resultado = dividendo / divisor;
    alert(`El resultado ${dividendo} / ${divisor} = ${resultado}`);
} catch (error) {
    console.error(error.message);
}
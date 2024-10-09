const cajas = 25;
const peso = 748;

function calculo(caja,peso) {
    let pesoTotal = cajas * peso;
    alert(` El camion trasporta ${cajas} cajas 
        Cada caja pesa: ${peso} Kg
        El camion trasporta un total de: ${pesoTotal} Kg`)
}

calculo(cajas,peso);





const llaves = 11500;
const bomba = 1168000;
const perno = 87000

function calculo(llaves, bomba,perno) {
    let valorLLaves = llaves * 5;
    let valorPerno = perno * 3;
    let TotalDinero = valorLLaves + bomba +valorPerno + 91000;
    alert(`el valor de las llaves es: ${valorLLaves}
        El valor de la bomba es: ${bomba}
        El valor de la caja de pernos es : ${valorPerno}
        El total de dinero que tenia el maestro de obra es: ${TotalDinero}`)
    
    }

calculo(llaves,bomba,perno);




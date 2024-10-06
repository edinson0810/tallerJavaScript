let a = parseFloat(prompt("Ingrese el valor de A"));
let b = parseFloat(prompt("Ingrese el valor de B"));
let c = parseFloat(prompt("Ingrese el valor de C"));

function caluclo(a, b, c) {
    let discriminante = b **2 -4 * a * c;

    if(discriminante > 0){
        let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        alert(`Solucion 1: ${x1} 
        Solucion 2: ${x2}`)
    }else if (discriminante === 0){
        let x = -b / (2*a);
        alert(`Solucion: ${x}`);
    }else{
        alert(`No tienen solucion, el discrimnante es negativo ${discriminante}`)
    }
}

caluclo(a, b, c);

// puede ingresar n cantidad de numeros

function media(...numeros) {
let arreglo = numeros[0];

let sum = 0;
for (let num of arreglo){
sum += num;
}
let media = sum / arreglo.length;
return media;
}

let numeros = [];  
while (true) {
let num = parseFloat(prompt(`
Ingrese el numero
0 para salir`))
if (num != 0) {
numeros.push(num);
}else {
break;
}
}

let resutado = media(numeros);
alert(resutado);
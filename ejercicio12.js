let base = parseFloat(prompt("Ingrese la base del rectangulo"));
let altura = parseFloat(prompt("Ingrese la altura del rectangulo"));


function areaRectagulo(b, a) {
   return b * a; 
}

let resultado = areaRectagulo( base, altura)

alert(` el area del rectangulo es ${resultado}`)
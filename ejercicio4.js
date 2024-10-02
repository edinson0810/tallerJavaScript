let numero = parseInt(prompt("Ingrese un numero"));
 
if (isNaN(numero)){
    alert("ingrese un numero entero");
} else{
if (numero % 2 === 0){
    alert("El numero " + numero + " es Par");
 } else {
    alert("El numero " + numero + " es Impar");}
 }
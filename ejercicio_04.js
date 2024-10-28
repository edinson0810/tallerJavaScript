let palabra = prompt("Ingrese una palabra");

const calcular = (palabra) => {
(palabra.length < 5) ? console.log( "La palabra es corta"): console.log( "La palabra es larga");
}


calcular(palabra);

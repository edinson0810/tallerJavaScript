let palabra = prompt("Ingrese la palabra");

const silabas = (palabra) => {
const contar = /([aeiouáéíóú])(?:[aeiouyáéíóú]?)(?![aeiouáéíóú])/gi;
// gi siginifica global insensible
// const contar = /[aeiou]/gi;
const cantidad = palabra.match(contar);
console.log(cantidad);

}

silabas(palabra);
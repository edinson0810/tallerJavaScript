// funciones anonimas
let numero = parseInt(prompt("Ingrese el numero que sea multiplicar"));
let Iniciar = parseInt(prompt("En que numero desea que inicie"));
let terminar = parseInt(prompt("Ingrese el numero hasta dond queire multiplicar"));
(() => {
for (let i = Iniciar; i <= terminar; i++){
    // no multiplica el 5 y pasa al 6
    // if (i === 5 ) {
    // continue;
    // }
console.log(`${numero} x ${i} = ${numero * i}`);

}


}
)();
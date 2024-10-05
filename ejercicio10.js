let pizza = parseInt(prompt(`
    1. pizza vegetariana 
    2. pizza no vegetariana
    ingrese su opcion`))


    let ingrediente,
    ingredienteExtra,
    comprobarEleccion = true,
    tipoPizza;

     if (pizza <= 0 || pizza >=3) {
        alert("Valor invalido")
     }else{
        if (pizza ==1) {
            tipoPizza = "vegetariana";
            while (comprobarEleccion) {
                ingrediente = parseInt(prompt(`
                1. pimiento
                2.tofu
                Ingrese su opcion (numero)
                `));
                if (ingrediente === 1) {
                    ingredienteExtra = "pimiento";
                    comprobarEleccion = false;
                }else if (ingrediente === 2){
                    ingredienteExtra = "tofu";
                    comprobarEleccion = false;
                } else {
                    alert("Valor invalido")
                }
            }
        }else if (pizza ==2) {
              while (comprobarEleccion) {
                ingrediente = parseInt(prompt(`
                1. peperoni
                2. Jamon
                3. Salmon
                Ingrese su opcion (numero)`));
                if (ingrediente !== 1 && ingrediente !== 2 && ingrediente !==3) {
                    alert("No ingreso un ingrediente valido");
                } else if (ingrediente ===1) {
                    ingredienteExtra = "peperoni";
                    comprobarEleccion = false;
                }else if (ingrediente ===2) {
                    ingredienteExtra = "Jamon";
                    comprobarEleccion = false
                } else {
                    ingrediente = "salmon";
                    comprobarEleccion = false;
                }
              }  
            }
            alert(`Pizaa ${tipoPizza} con:
                -Mozarrella
                -Tomate
                -${ingredienteExtra}
                `);
        }
      
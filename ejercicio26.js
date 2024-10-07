let gradosCelsius = parseFloat(prompt("Ingrese los grados centigrados"));
let gradosFahrnheit = convertirACelsiusAFahrenheit(gradosCelsius);

function convertirACelsiusAFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    alert(` ${gradosCelsius} grados celsius son  ${fahrenheit} grados fahrenheit`);
    }


convertirACelsiusAFahrenheit(gradosCelsius, gradosFahrnheit);
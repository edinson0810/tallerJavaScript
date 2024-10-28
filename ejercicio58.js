function signoZodiacal() {
    let mes = prompt("Ingrese el nombre del mes:").toLowerCase();
    let signo;
  
    if (mes === "enero" || mes === "febrero") {
      signo = "Acuario o Piscis";
    } else if (mes === "marzo" || mes === "abril") {
      signo = "Aries o Tauro";
    } else if (mes === "mayo" || mes === "junio") {
      signo = "Géminis o Cáncer";
    } else if (mes === "julio" || mes === "agosto") {
      signo = "Leo o Virgo";
    } else if (mes === "septiembre" || mes === "octubre") {
      signo = "Libra o Escorpio";
    } else if (mes === "noviembre" || mes === "diciembre") {
      signo = "Sagitario o Capricornio";
    } else {
      signo = "Mes no válido";
    }
  
    alert(`El signo zodiacal asociado es: ${signo}`);
  }
  signoZodiacal();
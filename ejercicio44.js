function convertirMoneda() {
    const TASA_DOLAR = 0.00027; // Suponiendo tasa de cambio
    const TASA_EURO = 0.00023;
    
    let pesos = parseFloat(prompt("Ingrese la cantidad en pesos:"));
    let dolares = pesos * TASA_DOLAR;
    let euros = pesos * TASA_EURO;
    
    alert(`En dólares: $${dolares.toFixed(2)}\nEn euros: €${euros.toFixed(2)}`);
  }
  convertirMoneda();
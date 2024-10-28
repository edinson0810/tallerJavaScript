function calcularInteresBancario() {
    let saldo = parseFloat(prompt("Ingrese el saldo del depósito:"));
    let tasaInteres = saldo < 100000 ? 0.03 : 0.04;
    
    let interes = saldo * tasaInteres;
    let saldoFinal = saldo + interes;
  
    alert(`Interés ganado: $${interes}\nSaldo final: $${saldoFinal}`);
  }
  calcularInteresBancario();
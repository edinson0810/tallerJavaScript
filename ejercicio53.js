function calcularTotalProductos() {
    const IVA = 0.19;
    let subtotal = 0;
    
    for (let i = 1; i <= 5; i++) {
      let precio = parseFloat(prompt(`Ingrese el precio del producto ${i}:`));
      subtotal += precio;
    }
    
    let iva = subtotal * IVA;
    let total = subtotal + iva;
  
    alert(`Subtotal: $${subtotal}\nIVA: $${iva}\nTotal: $${total}`);
  }
  calcularTotalProductos();
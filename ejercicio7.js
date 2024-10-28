let rentaAnual = parseFloat(prompt("Escribe su renta anual"));

if (rentaAnual < 0) {
    alert("valor invalido")
} else {
    if (rentaAnual > 0 && rentaAnual < 10000) {
        alert("No tiene carga impositivo");
    } else if (rentaAnual >=10000 && rentaAnual < 20000){
        alert(`Carga impositivo del 5% (${rentaAnual.toFixed(2) * 0.05})`);
    } else if ( rentaAnual >= 20000 && rentaAnual < 35000){
        alert(`Carga impositivo del 10% (${rentaAnual.toFixed(2) * 0.1})`);
    } else if (rentaAnual >= 35000 && rentaAnual < 60000){
        alert(`Carga impositivo del 20% (${rentaAnual.toFixed(2) * 0.2})`);
    } else {
        alert(`Carga impositivo del 45% (${rentaAnual.toFixed(2) * 0.45})`);
    }
}


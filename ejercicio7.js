let renta = prompt("Escribe su renta anual");


 if (renta >=10000 && renta <20000){
    alert("Carga impositivo del 5%")
} else if (renta >=20000 && renta <35000){
    alert("Carga impositivo del 10%")
}else if (renta >=35000 && renta <6000){
    alert("Carga impositiva del 20%")
} else if (renta >=65000) {
    alert("Carga impositiva del 45%")
} else{
    alert ("No tiene carga impositivo para estarenta")
 }
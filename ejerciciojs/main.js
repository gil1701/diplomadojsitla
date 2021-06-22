let diametro = prompt("Entre el diametro");
let grosor = prompt("Entre el grosor:");

if(diametro > 1.4) {
    console.info("La rueda es para un vehículo grande");
} else if (diametro <= 1.4 && diametro > 0.8) {
    console.info("La rueda es para un vehículo mediano");
} else {
    console.info("La rueda es para un vehículo pequeño");
}

if (diametro > 1.4 && grosor < 0.4 || (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25)) {
    console.info("El grosor para esta rueda es inferior al recomendado");
}
'use strict'

//Parámetros REST y SPREAD

function listadoFrutas(fruta1, fruta2, ...resto_las_frutas){
    console.log("Fruta 1: " + fruta1);
    console.log("Fruta 2: " + fruta2);
    console.log(resto_las_frutas);
}

listadoFrutas("naranja", "manzana", "Coco", "Pera", "Sandia");

var frutas = ["naranja", "manzana"];
//Sread con 3 puntos
listadoFrutas(...frutas, "Coco", "Pera", "Sandia");

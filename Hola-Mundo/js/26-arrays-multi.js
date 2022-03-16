'use strict'

var categorias = ["Acción", "Terror", "Comedia"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];

var cine = [categorias, peliculas];

// Agregar un elemento a array

/*
var elemento = "";

do{
    elemento = prompt("Introduce tu película");
    peliculas.push(elemento);
}while(elemento != "ACABAR");

peliculas.pop();

*/


//Añadir o eliminar elementos de array
var indice = peliculas.indexOf("Gran torino");
if(indice > -1){
    peliculas.splice(indice, 1);
}

//Convertir a String
var peliculas_string = peliculas.join();

console.log(peliculas_string);

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

console.log(cadena_array);

//Ordenar array
peliculas.sort();
peliculas.reverse();

console.log(peliculas);
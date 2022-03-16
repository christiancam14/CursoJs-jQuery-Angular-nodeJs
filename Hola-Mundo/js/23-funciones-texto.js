'use strict'

// Transformación de textos

var num = 444;
var texto1 = "Bienvenido al curso de Javascript, curso de Christian Camacho";
var texto2 = "Es muy buen curso";

var dato = num.toString();
    dato = texto1.toLowerCase();
    dato = texto2.toUpperCase();

//Calcular longitud

var nombre = "";

console.log(nombre.length);

//Concatenar - Unir textos

//var textoTotal = texto1+texto2;

var textoTotal = texto1.concat(" " + texto2);
console.log(textoTotal);

//Busqueda

var busqueda = texto1.indexOf("curso"); //Muestra el índice donde comienza
console.log(busqueda);

var busqueda = texto1.match(/curso/g); //Muestra todas las veces que aparece
console.log(busqueda);

var busqueda = texto1.substr(14,5); //Saca un bloque del string
console.log(busqueda);

var busqueda = texto1.charAt(44); //Muestra el caracter de la posición
console.log(busqueda);

var busqueda = texto1.startsWith("Bienvenido"); //True o False si comienza
console.log(busqueda);

var busqueda = texto1.includes("Javascript"); //True o False si está
console.log(busqueda);

//Reemplazar texto

var busqueda = texto1.replace("Javascript", "Java"); //Reemplaza
console.log(busqueda);

var busqueda = texto1.slice(14,22); //Muestra un bloque de string
console.log(busqueda);

var busqueda = texto1.split(" "); //Separa el str por espacios
console.log(busqueda);

var busqueda = texto1.trim(); //Quita espacios por delante y por detrás
console.log(busqueda);
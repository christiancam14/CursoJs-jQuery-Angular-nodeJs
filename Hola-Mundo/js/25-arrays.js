'use strict'

// Arrays, arreglos, matrices

var nombre = "Victor Robles";
var nombres = ["Christian", "Victor", "Laura"];

var lenguajes = new Array("Php", "Js", "Go", "Java", "C++", "Pascal");

console.log(lenguajes);
console.log(lenguajes[2]);

// Avanzados

console.log(lenguajes.length);
var elemento = parseInt(prompt("¿Qué elemento del array quieres?",0));

if(elemento >= nombres.length){
    alert("Introduce el numero correcto menor que "+ nombres.length);10
}

alert(nombres[elemento]);

document.write("<h1> Lenguajes de programación 2021 </h1>");
document.write("<ul>");

//Recorrer array

for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>" + lenguajes[i] + "</li>")
}

//Recorrer forEach
lenguajes.forEach((elemento, index, data)=>{
    document.write("<li>"+elemento+"</li>");    
});

//Recorrer forIn
for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje] +"</li>");
}

document.write("</ul>");

//Busquedas

var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");

var precios = [20, 10, 50, 80, 12];

var busqueda = precios.some(precio => precio < 10);
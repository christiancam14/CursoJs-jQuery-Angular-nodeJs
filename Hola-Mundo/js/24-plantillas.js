'use strict'

//Plantillas

var nombre = prompt("Mete tu nombre");
var apellido = prompt("Mete tus apellidos");

// var texto = "Mi nombre es: " + nombre + " Mis apellidos son: " + apellido;

var texto = `
    <H1>Hola qué tal </H1>
    <H3>Mi nombre es: ${nombre} </H3>
    <H3>Mis apellidos son: ${apellido} </H3>
`;

document.write(texto);
'use strict'

// Local storage o HTML5 web storage

// Comprobar si el navegador es compatible.

if(typeof(Storage) !== 'undefined'){
    console.log("DISPONIBLE");
}else{
    console.log("NO ESTÁ DISPONIBLE");
}

// Guardar dato en el LS

localStorage.setItem("Titulo", "Curso de Symfony");

// Recuperar elemento

console.log(localStorage.getItem("Titulo"));

document.querySelector("#peliculas").innerHTML =  localStorage.getItem("Titulo");

// Guardar objetos

var usuario = {
    nombre: "Christian",
    apellido: "Camacho",
    email: "chriscamacho1045@gmail.com"
};

// Es necesario convertir los objetos a un Json String para guardar

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar objetos 

var userjs= JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#peliculas").append(" " + userjs.nombre);

// Eliminar elementos del LS

localStorage.removeItem("usuario");

localStorage.clear();
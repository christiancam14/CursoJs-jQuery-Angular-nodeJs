'use strict'

//DOM

//Conseguir elementos con un ID concreto

//var caja = document.getElementById("micaja");

var caja = document.querySelector("#micaja");

caja.innerHTML = "Texto nuevo";
caja.style.background = "red";
caja.style.padding = "20px";
caja.className = "hola hola23";

console.log(caja);

//Conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName("div");
var contenidoEnTexto = todosLosDivs[2].textContent;

console.log(contenidoEnTexto);

//todosLosDivs.forEach((valor, indice) => {
var section = document.querySelector("#misection");
var hr = document.createElement("hr");

var valor;
for(valor in todosLosDivs){
    if( typeof(todosLosDivs[valor].textContent) == "string"){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        section.append(parrafo);
    }
};

section.append(hr);

//Conseguir elementos por su clase css

var divsRojos = document.getElementsByClassName("rojo");

for(var div in divsRojos){
    if(divsRojos[div].className == "rojo"){
        divsRojos[div].style.background = "red";
    }
}


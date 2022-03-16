'use strict'

/*
Ejercicio:
*/

var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener("submit", function(){
    var titulo = document.querySelector("#addpelicula").value;
    if(titulo.trim().length >= 1){
        localStorage.setItem(titulo.trim(), titulo.trim());
    }
    location.reload(true);
});

var index;
var ul = document.querySelector("#peliculas-list");
for(index in localStorage){
        
    if(typeof localStorage[index] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[index]);
        ul.append(li);
    }
}

var formulariob = document.querySelector("#formBorrarPeliculas");

formulariob.addEventListener("submit", function(){
    var titulo = document.querySelector("#delpelicula").value;
    if(titulo.trim().length >= 1){
        localStorage.removeItem(titulo.trim());
    }
    location.reload(true);
});
'use strict'

//JSON - JavaScript Object Notation

var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: 'Estados Unidos'
};

var peliculas = [
    {titulo: "La verdad duele", year: 2016, pais: "Francia"},
    {titulo: "Spiderman", year: 2016, pais: "NYC"},
    {titulo: "Thor", year: 2016, pais: "Manhattam"},
];

var caja_peliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
    var parrafo = document.createElement("p");
    parrafo.append(peliculas[index].titulo);
    caja_peliculas.append(parrafo);
}
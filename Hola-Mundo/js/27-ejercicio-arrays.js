'use strict'

/*
1. Pida 6 números por pantalla y los meta en un array
2. Mostrar el array entero (TODOS LOS ELEMENTOS) en el cuerpo de la página y la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuántos elementos tiene el array
6. Búsqueda de un valor introducido por el usuario y decir si está y su posición
*/

document.write("<h1> ARRAY </h1>");

var numeros = [];

function mostrar(vector, textoCustom = ""){
    document.write("<h3>"+ textoCustom +"</h3>");
    /*for(var i = 0; i <= 5; i++){
        document.write(vector[i] + "<br/><hr/>");
    }
    */
    document.write("<ul>");
    vector.forEach((elemento, index) => {
        document.write("<li>"+elemento+"</li>")
    });
    document.write("</ul>")

    console.log(vector);
}

for(var i = 0; i <= 5; i++){
    numeros.push(parseInt(prompt("Introduzca un número ("+ (i+1) +")")));
}

mostrar(numeros, "Numeros ingresados");

var num_ordenado = numeros.sort();
mostrar(num_ordenado, "Numeros Ordenados");

var num_invertido = numeros.reverse();
mostrar(num_invertido, "Numeros Invertidos");

document.write("<h3> Cantidad de numeros </h3>");
var num_elementos = numeros.length;


document.write(num_elementos);
console.log(num_elementos);

document.write("<h3> Número buscado </h3>");

var valor = parseInt(prompt("Ingrese el valor a buscar"));

var indice = num_ordenado.indexOf(valor);
if(indice < 0){
    document.write("El elemento no fue encontrado")
}else{
    document.write("El elemento está en la posición número " + indice);
}
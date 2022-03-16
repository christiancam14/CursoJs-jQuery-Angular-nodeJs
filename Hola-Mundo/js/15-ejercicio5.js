'use strict'

//Mostrar todos los divisores de un número introducido en un prompt

var numero = parseInt(prompt("Introduzca el número"));

document.write("<h1> El1 numero " + numero + " es divisible por: </h1> <br/>" );

for(var i = 0; i <= numero; i++){
    if( (numero % i) == 0){
        document.write(i+"<br/>");
    }
}
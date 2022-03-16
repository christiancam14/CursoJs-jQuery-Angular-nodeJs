'use strict'

/*
Hacer la tabla de multiplicar de un número introducido en pantalla
*/

var numero = parseInt(prompt("Introduzca su número"));

for(var i = 0; i <= 10; i++){
    document.write("<br/>" + numero + " * " + i + " = " + numero*i );
}
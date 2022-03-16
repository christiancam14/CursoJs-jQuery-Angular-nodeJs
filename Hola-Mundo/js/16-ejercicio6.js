'use strict'

/*
Hacer un programa que nos diga si un número es par o impar
1. Ventana prompt
2. Si no es válido que nos pida de nuevo el número
*/

var numero = parseInt(prompt("ingrese el número"));

while(isNaN(numero)){
    numero = parseInt(prompt("ingrese un número válido"));
}

if(numero % 2 == 0){
    document.write("Es par");
}else{
    document.write("Es impar");
}
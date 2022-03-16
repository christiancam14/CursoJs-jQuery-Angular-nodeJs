'use strict'

//Programa que pida dos números y que nos diga cuál es el mayor, el menor y si son iguales
//Plus: Si los números no son un número o son menores o iguales a cero, vuelve a pedirlos

var numero1 = parseInt(prompt("Ingrese el primer número", 0));
var numero2 = parseInt(prompt("Ingrese el segundo4 número", 0));

if(numero1 == numero2){
    alert("Los números son iguales")
}else if(numero1 > numero2){
    alert("El número " + numero1 + " es mayor que " + numero2);
}else if(numero1 < numero2){
    alert("El número " + numero2 + " es mayor que " + numero1);
}
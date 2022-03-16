'use strict'

//Calculadora que pida dos números por pantalla, si ponemos uno mal que lo vuelva a pedir, que lo muestre en el body de la página en una alerta, y por consola el resultado de sumar, restar, multiplicar y dividir esas cifras

var numero1 = parseInt(prompt("Introduce el primer número",0));
var numero2 = parseInt(prompt("Introduce el segundo número",0));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2) ){
    numero1 = parseInt(prompt("Introduce el primer número",0));
    numero2 = parseInt(prompt("Introduce el segundo número",0));
}

var resultado = "La suma es: " + (numero1 + numero2) + "<br/>"+
                "La resta es: " + (numero1 - numero2) + "<br/>"+
                "La multiplicación es: " + (numero1 * numero2) + "<br/>"+
                "La división es: " + (numero1 / numero2) + "<br/>"
;

document.write(resultado);
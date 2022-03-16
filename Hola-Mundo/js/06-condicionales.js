'use stric'

//Condicional IF

var edad = 18;
var nombre = "David Suare";

/*
Operadores relacionales
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=

    Negación: !=
    And: &&
    O: ||
*/

if(edad >= 18){
    console.log("Eres mayor de edad");

    if(edad <= 33){
        console.log("Todavía eres milenial");
    }else if(edad >= 70){
        console.log("Eres anciano");
    }
}else{
    console.log("Es menor de edad");
}
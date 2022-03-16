'use strict'

//Mostrar todos los números impares que hay entre los números introducidos por el usuario

var numero1 = parseInt(prompt("Introduzca el primer número", 0)); 
var numero2 = parseInt(prompt("Introduzca el segundo número", 0)); 

if(numero1 == numero2){
    document.write("<h1> Entre "+numero1+" y "+numero2+" no hay números </h1>")
}else if(numero1 > numero2){
    document.write("<h1> Entre "+numero2+" y "+numero1+" hay estos números impares: </h1>");

    var add = 0;
    //Comprobamos si el primero es impar
    if( (numero2 % 2) == 0 ){
        //Es par
        add = 1;
    }else{
        //Es impar
    }

    for(var i = (numero2+add); i <= numero1; i = i + 2){
        document.write(i+"<br>");
    }

}else if(numero1 < numero2){
    document.write("<h1> Entre "+numero1+" y "+numero2+" hay estos números impares: </h1>");

    var add = 0;
    //Comprobamos si el primero es impar
    if( (numero1 % 2) == 0 ){
        //Es par
        add = 1;
    }else{
        //Es impar
    }

    for(var i = (numero1+add); i <= numero2; i = i + 2){
        document.write(i+"<br>");
    }

}
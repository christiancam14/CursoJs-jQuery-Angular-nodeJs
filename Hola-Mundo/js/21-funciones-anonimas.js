'use strict'

//Funciones anónimas, no tienen nombre y se guardan en una variable

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

// Flecha función
sumame(5, 7, dato => {
    console.log("La suma es ", dato);
},

dato => {
    console.log("La suma es: ", dato*2);
}
)

console.log(
    sumame(4,5)
);


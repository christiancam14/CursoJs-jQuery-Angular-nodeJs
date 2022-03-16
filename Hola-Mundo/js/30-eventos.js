'use strict'

//Eventos del ratón

window.addEventListener('load', () => {

    function cambiarColor() {

        var bg = boton.style.background;
        console.log(bg);
        if (bg == "red") {
            console.log("Me has dado click");
            boton.style.background = "green";
            boton.textContent = "Botonsote";
        } else {
            console.log("Me has dado clicklkkkkkkkkkkk");
            boton.style.background = "red";
            boton.textContent = "Botoncito";
        };
        return true;
    };

    var boton = document.querySelector("#boton");

    // CLICK
    boton.addEventListener('click', function () {
        cambiarColor();
    });

    // Mouse over
    boton.addEventListener('mouseover', function () {
        boton.style.background = "yellow";
    });

    // Mouse out
    boton.addEventListener('mouseout', function () {
        boton.style.background = "#ccc";
    });

    // Focus
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus', function () {
        console.log("Estás dentro del elemento");
    });

    // Blur
    input.addEventListener('blur', function () {
        console.log("Estás fuera del elemento");
    });

    // Keydown
    input.addEventListener('keydown', function (event) {
        console.log("Pulsando esta tecla", String.fromCharCode(event.keyCode));
    });

    // Keypress
    input.addEventListener('keypress', function (event) {
        console.log("Tecla presionada", String.fromCharCode(event.keyCode));
    });

    // Keyup
    input.addEventListener('keyup', function (event) {
        console.log("Tecla soltada", String.fromCharCode(event.keyCode));
    });


});
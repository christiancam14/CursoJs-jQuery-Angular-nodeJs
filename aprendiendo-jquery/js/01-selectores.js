'use strict'

// Comprobar si el documento está listo jQuery = $

$(document).ready(function(){
    // Selector de ID
    $("#rojo").css("background", "red")
                        .css("color", "white");
    
    $("#amarillo").css("background", "yellow")
                        .css("color", "green");

    $("#verde").css("background", "green")
                        .css("color", "white");

    // Selectores de clases
    var mi_clase = $('.zebra').css("padding", "5px");

    var sin_borde = $('.sin_borde'); 
    sin_borde.click(function(){
        $(this).toggleClass('zebra');
        console.log($(this));
    });
    
    // Selectores de etiqueta
    var parrafos = $('p').css("cursor", "pointer");
    parrafos.click(function(){
        $(this).toggleClass('zebra');
    });

    // Selector de atributo
    $('[title="Google"]').css('background', '#ccc');
    $('[title="Facebook"]').css('background', 'blue').css('color', 'white');
    $('[title="Youtube"]').css('background', 'red');

    // Selectores / otros
    //$('p, a').addClass("margen-superior");
    
    //var busqueda = $("#caja .resaltado").eq(0).parent().parent().parent().find('[title="Google"]');
    
    var busqueda = $("#elemento2").parent().parent().find('.resaltado');

    console.log(busqueda);
});

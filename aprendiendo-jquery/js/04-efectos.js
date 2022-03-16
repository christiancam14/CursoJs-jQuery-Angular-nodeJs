'use strict'

$(document).ready(function(){
    
    var caja = $("#caja");
    var mostrar = $("#mostrar");
    var ocultar = $("#ocultar");
    var rango = $("#rango");
    var muestra = $("#muestra");
    var animacion = $("#animar");

    rango.change(function(){
        //muestra.append(rango.val());
        caja.fadeTo("fast",(rango.val()/10));
    });

    mostrar.click(function(){
        $(this).hide();
        ocultar.show();
        //caja.show("fast");
        //caja.fadeIn("slow");
        caja.fadeTo("fast", 1);
    });

    ocultar.click(function(){
        $(this).hide();
        mostrar.show();
        //caja.hide("fast");
        //caja.fadeOut("slow");
        caja.fadeTo("fast", 0);
    });

    animacion.click(function(){
        caja.animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '110px'
                }, 'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '80px'
                }, 'slow')
            .animate({
                borderRadius: '0px',
                marginTop: '0px'
                }, 'slow')
            .animate({
                borderRadius: '100px',
                marginTop: '0px'
                }, 'slow');
    });

});
$(document).ready(function(){
    // MouseOver y MouseOut
    var caja = $("#caja");

    // caja.mouseover(function(){
    //     $(this).css("background", "red");
    // });
    
    // caja.mouseout(function(){
    //     $(this).css("background", "green");
    // })
    
    // Hover
    
    function cambiaRojo(){
        $(this).css("background", "red");
    };
    function cambiaVerde(){
        $(this).css("background", "green");
    };

    caja.hover(cambiaRojo, cambiaVerde);

    // Click y dobleClick
    caja.click(function(){
        $(this).css("background", "blue").css("color", "white");
    });

    caja.dblclick(function(){
        $(this).css("background", "pink").css("color", "gray");
    });

    // Focus y blur
    var nombre = $("#nombre"); 
    var datos = $("#datos");
    nombre.focus(function(){
        $(this).css("border", "4px solid green");
    });
    nombre.blur(function(){
        $(this).css("border", "2px solid transparent");

        datos.text($(this).val()).show();
    });

    //MouseDown y MouseUp
    datos.mousedown(function(){
        $(this).css("border-color", "gray");
    });
    datos.mouseup(function(){
        $(this).css("border-color", "black");
    });

    // Mousemove
    $(document).mousemove(function(){
        let height = screen.height;
        let width = screen.width;
        $("#sigueme").css("left", event.clientX);
        $("#sigueme").css("top", event.clientY);
    });

});
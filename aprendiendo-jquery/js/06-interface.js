$(document).ready(function(){
    var elemento = $('.elemento');
    var lista = $('.lista-seleccionable');
    var area = $('#area');
    var elementoMovido = $('#elemento-movido');
    var mostrar = $('#mostrar');
    var cajaEfectos = $('.caja-efectos');
    var misDatos = $('#mis-datos');
    var popUp = $('#popup');
    var lanzarPopUp = $('#lanzar-popup');

    // Mover elemento por la página
    elemento.draggable();

    // Redimensionar los elementos
    elemento.resizable();

    // Seleccionar elementos
    // lista.selectable();

    // Organizar elementos
    lista.sortable({
        update: function(event, ui){
            console.log("ha cabiado la lista");
        }
    });

    // Drop
    elementoMovido.draggable();
    area.droppable({
        drop: function(){
            console.log("Has soltado algo dentro de el área");
        }
    });

    // Efectos
    mostrar.click(function(){
        cajaEfectos.toggle("shake", 4000);
    });

    // Tooltip
    misDatos.tooltip();

    // Dialog
    lanzarPopUp.click(function(){
        popUp.dialog();
    });

    //Datepicker
    $('#calendario').datepicker();

    //Tabs
    $('#pestanas').tabs();

});
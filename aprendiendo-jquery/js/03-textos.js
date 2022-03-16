$(document).ready(function(){

    reloadLinks();

    // Textos
    var menu = $("#menu");
    var boton = $("#add_button");
    var link = $("#add_link");

    boton.click(function(){
        // menu.html('<li><a href="'+link.val()+'"></a></li>');
        // APPEND lo añade al final, PREPEND al comienzo, 
        //BEFORE lo añade fuera de la lista, y AFTER después
        // removeattr elimina un atributo
        menu.prepend('<li><a href="'+link.val()+'"></a></li>');
        link.val('');
        reloadLinks();
    });

    
});

function reloadLinks(){
    $('a').each(function(index){
        var that = $(this);
        var enlace = that.attr("href");
        that.attr('target', 'blanck');
        that.text(enlace);
    });
}
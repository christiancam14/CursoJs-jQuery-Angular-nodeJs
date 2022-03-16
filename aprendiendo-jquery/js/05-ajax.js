$(document).ready(function(){

    // Load
    // $("#datos").load("https://reqres.in/");

    // Metodo Get
    $.get("https://reqres.in/api/users?page=2", {page:2}, function(response){
        response.data.forEach((element, index)=>{
            $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>"); 
        });
    });

    // Metodo Post
    
    var formulario = $("#formulario");

    formulario.submit(function(e){
        e.preventDefault();
        var usuario = {
            name: $('input[name = "name"]').val(),
            web: $('input[name = "web"]').val()
        };

        /* PRIMER MÉTODO
        $.post($(this).attr("action"), usuario, function(response){
            console.log(response);
        }).done(function(){
            alert("USUARIO AÑADIDO");
        });
        alert();
        */

        // SEGUNDO MÉTODO
        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: usuario,
            //dataType: 'json',
            //contentType: 'application/json',
            beforeSend: function(){
                console.log("Enviando usuario...");
            },
            success: function(response){
                console.log(response);
            },
            error: function(){
                console.log("A ocurrido un error");
            },
            // Si el tiempo supera el timeOut genera un error
            timeOut: 2000
        });

        return false;
    });
});
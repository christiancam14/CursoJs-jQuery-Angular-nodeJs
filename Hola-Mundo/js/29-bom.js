'use strict'

//BOM - Browser Objet Model
function getBom(){
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    console.log(screen.height);
    console.log(screen.width);
    console.log(window.location);
}

function redirect(url){
    window.location.href = url;
}

function abrirVentana(url){
    window.open(url,"","width=400, height=300");
}

getBom();
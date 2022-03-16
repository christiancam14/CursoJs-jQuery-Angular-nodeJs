$(document).ready(function(){
    var si = $("#yes");
    var no = $("#no");

    si.click(function(){
        alert("GRACIAS POR SER LA MEJOR NOVIA");
        window.location = "https://es.pornhub.com/view_video.php?viewkey=ph5e177d7d86d5e&t=161";
    });

    no.click(function(){
        let height = screen.height;
        let width = screen.width;
        // alert();
        no.css("left", `${ Math.random() * width*0.45 - 300 }px`);
        no.css("top", `${ Math.random() * height*0.45 - 300}px`);
    });
});
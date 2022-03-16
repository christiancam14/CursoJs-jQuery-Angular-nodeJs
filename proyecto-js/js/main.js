$(document).ready(function () {
  if (window.location.href.indexOf("index") > -1) {
    // Slider
    $(".galeria").bxSlider({
      mode: "fade",
      captions: true,
      slideWidth: 1200,
      responsive: true,
    });
  }

  // Posts
  if (window.location.href.indexOf("index") > -1) {
    var posts = [
      {
        title: "Prueba de título 1",
        date:
          "Publicado el " +
          moment().format("dddd") +
          " " +
          moment().format(" Do") +
          " " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, sint adipisci libero molestiae, corrupti atque tempore modi nesciunt ipsum odit perferendis aliquam architecto hic illum facere quas beatae, repellat ipsam! Libero officia quibusdam quaerat iste quos, earum totam natus ut labore vero, distinctio illum? Illum ex hic explicabo reprehenderit est modi minima commodi, ducimus cum reiciendis veniam? Sed, accusantium id. Tenetur pariatur illo amet iure reiciendis distinctio aspernatur excepturi ut neque. Adipisci autem neque unde officia repellendus illum nobis voluptatum ad incidunt, iure doloribus, rem ipsam optio non, dolore aut!",
      },
      {
        title: "Prueba de título 2",
        date:
          "Publicado el " +
          moment().format("dddd") +
          " " +
          moment().format(" Do") +
          " " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "By default in the CSS box model, the width and height you assign to an element is applied only to the elements content box. If the element has any border or padding, this is then added to the width and height to arrive at the size of the box thats rendered on the screen. This means that when you set width and height, you have to adjust the value you give to allow for any border or padding that may be added. For example, if you have four boxes with width: 25%;, if any has left or right padding or a left or right border, they will not by default fit on one line within the constraints of the parent container.",
      },
      {
        title: "Prueba de título 3",
        date:
          "Publicado el " +
          moment().format("dddd") +
          " " +
          moment().format(" Do") +
          " " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Note: It is often useful to set box-sizing to border-box to layout elements. This makes dealing with the sizes of elements much easier, and generally eliminates a number of pitfalls you can stumble on while laying out your content. On the other hand, when using position: relative or position: absolute, use of box-sizing: content-box allows the positioning values to be relative to the content, and independent of changes to border and padding sizes, which is sometimes desirable.Note: It is often useful to set box-sizing to border-box to layout elements. This makes dealing with the sizes of elements much easier, and generally eliminates a number of pitfalls you can stumble on while laying out your content. On the other hand, when using position: relative or position: absolute, use of box-sizing: content-box allows the positioning values to be relative to the content, and independent of changes to border and padding sizes, which is sometimes desirable.",
      },
      {
        title: "Prueba de título 4",
        date:
          "Publicado el " +
          moment().format("dddd") +
          " " +
          moment().format(" Do") +
          " " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "The width and height properties include the content, padding, and border, but do not include the margin. Note that padding and border will be inside of the box. For example, .box {width: 350px; border: 10px solid black;} renders a box that is 350px wide, with the area for content being 330px wide. The content box cant be negative and is floored to 0, making it impossible to use border-box to make the element disappear. Here the dimensions of the element are calculated as: width = border + padding + width of the content, and height = border + padding + height of the content.",
      },
      {
        title: "Prueba de título 5",
        date:
          "Publicado el " +
          moment().format("dddd") +
          " " +
          moment().format(" Do") +
          " " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Redes sociales: Si se une a nuestras cuentas en las redes sociales, como Twitter y Facebook, es posible que recibamos información personal sobre usted. Si utiliza estas redes, se aplicarán las correspondientes políticas de privacidad, por lo que le animamos a leerlas. Solicitantes de empleo, prácticas, becas y ayudas: Los solicitantes de empleo, prácticas, becas y ayudas de Mozilla deben proporcionar su nombre, dirección postal, número de teléfono, dirección de correo electrónico, currículo y, en algunos casos, otra información. Esta información se utilizará para procesar y valorar las solicitudes y contactar con los solicitantes en relación con posibles ofertas. Las solicitudes de empleo y prácticas se gestionan a través de Greenhouse y las solicitudes de becas y las solicitudes de ayudas de MOSS en Fluxx.io.Colaboradores: Si se ofrece voluntario como colaborador de la comunidad de Mozilla, tanto Mozilla como otros se pondrán en contacto con usted en la dirección de correo electrónico proporcionada en relación con su colaboración y agradecer sus esfuerzos. Si colabora con Bugzilla, Mozilla Reps o la base de código, su dirección de correo electrónico y, posiblemente, su nombre serán públicos para todos los usuarios de Internet. Si crea un perfil en Mozillians.org, este será accesible para todos los empleados y colaboradores de Mozilla. Puede editar los datos de su perfil en Ajustes de perfil. En ocasiones, mostramos información de colaboradores de fuentes (como Bugzilla) en paneles para compartir estadísticas adicionales sobre la comunidad de Mozilla. Un ejemplo sería https://wiki.mozilla.org/Contribute/Dashboards. Si es posible, tratamos de minimizar la información de contacto pública.Opinión del usuario: Puede enviarnos su opinión sobre nuestros productos y servicios de páginas web, como input.mozilla.org, a través de la experiencia con el producto o mediante canales como correo electrónico, Bugzilla, Matrix, cuentas de redes sociales, nuestra página Involúcrate o grupos como Student Ambassadors. Trate de compartir la menor cantidad posible de información personal en estos foros, ya que todo el mundo podrá acceder a sus comentarios. Cuentas y suscripciones.",
      },
    ];

    posts.forEach((item, index) => {
      var post = `
        <article class="post">
            <h2> ${item.title} </h2>
            <span class="date"> ${item.date} </span>
            <p> ${item.content} </p>
            <a href="#" class="button-more">Leer más</a>
        </article>
        `;

      $("#posts").append(post);
    });
  }

  // Selector de tema
  var theme = $("#theme");

  $("#to-green").click(function () {
    theme.attr("href", "css/green.css");
  });

  $("#to-red").click(function () {
    theme.attr("href", "css/red.css");
  });

  $("#to-blue").click(function () {
    theme.attr("href", "css/blue.css");
  });

  // Scroll arriba de la web
  $(".subir").click(function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );

    return false;
  });

  // Login falso

  $("#login form").submit(function () {
    var form_name = $("#form_name").val();

    localStorage.setItem("form_name", form_name);
  });

  var form_name = localStorage.getItem("form_name");

  if (form_name != null && form_name != "undefined" && form_name != "") {
    var about = $("#about p");

    about.html("<br/><Strong>Bienvenido, " + form_name + "</strong><br/>");
    about.append("<a href='#' id='logout'>Cerrar sesión</a>");

    $("#login").hide();

    $("#logout").click(function () {
      localStorage.clear();
      location.reload();
    });
  }

  // Acordeon
  if (window.location.href.indexOf("about") > -1) {
    $("#acordeon").accordion();
  }

  // Reloj
  if (window.location.href.indexOf("reloj") > -1) {
    setInterval(function () {
      var reloj = moment().format("hh:mm:ss");
      $("#reloj").html(reloj);
    }, 1000);
  }

  // Validación
  if (window.location.href.indexOf("contact") > -1){

    $("form input[name='date']").datepicker({
        dateFormat: 'dd-mm-yy'
    });


    $.validate({
        lang: 'es',
        errorMessagePosition: 'top',
        scrollToTopOnError: true
    });

  }

});

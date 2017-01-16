$(document).ready(function () {
    $(".icon").click(function () {
        $(".mobilenav").fadeToggle(500);
        $(".top-menu").toggleClass("top-animate");
        $(".mid-menu").toggleClass("mid-animate");
        $(".bottom-menu").toggleClass("bottom-animate");
    });

    $("li.voce-menu a").click(function () {
        $(".mobilenav").fadeToggle(500);
        $(".top-menu").toggleClass("top-animate");
        $(".mid-menu").toggleClass("mid-animate");
        $(".bottom-menu").toggleClass("bottom-animate");
    });
});

$('.button-collapse').sideNav({
      menuWidth: 240, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );

$(document).ready(function(){
    $(".on").click(function(){
        $(".contenedor").slideDown(0);
            $(".contenedor").slideToggle(3000);
    $(".off").click(function(){
        $(".contenedor").stop();
            $(".contenedor").slideDown(2000);
        });
    });
});

$(document).ready(function(){
    $('.slider').slider({full_width: true});
  });
      
$(document).ready(function(){
      $('.parallax').parallax();
    });
        


window.addEventListener("load", function(){
  var botonCerrar = document.getElementById("botonCerrar");
  var infoAbout = document.getElementById("infoAbout");
  var aboutBotton = document.getElementById("aboutBotton");
  var aboutMeMenu = document.getElementById("aboutMeMenu");
  var informacionAbout = document.getElementById("informacionAbout");
  var textoAbout = document.getElementById("textoAbout");

   botonCerrar.addEventListener("click", aboutHidden);
   aboutBotton.addEventListener("click", aboutMe);

});

function aboutMe(){
  infoAbout.classList.remove("hidden");
  textoAbout.classList.add("hidden");
  informacionAbout.classList.add("hidden");
  aboutMeMenu.classList.add("aboutMeMenuCambio");
}
function aboutHidden(){
  infoAbout.classList.add("hidden");
  textoAbout.classList.remove("hidden");
  informacionAbout.classList.remove("hidden");
  aboutMeMenu.classList.remove("aboutMeMenuCambio");
}

function maquina(contenedor,texto,intervalo){
   // Calculamos la longitud del texto
   longitud = texto.length;
   // Obtenemos referencia del div donde se va a alojar el texto.
   cnt = document.getElementById(contenedor);
   var i=0;
   // Creamos el timer
   timer = setInterval(function(){
      // Vamos añadiendo letra por letra y la _ al final.
      cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + "_";
      // Si hemos llegado al final del texto..
      if(i >= longitud){
         // Salimos del Timer y quitamos la barra baja (_)
         clearInterval(timer);
         cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
         return true;
      } else {
         // En caso contrario.. seguimos
         i++;
      }},intervalo);
};

var texto ="Front End Developer, Graphic Designer   and Mom";
// 100 es el intervalo de minisegundos en el que se escribirá cada letra.
maquina("info-fondo",texto,100);


// function maquina(contenedor,texto,intervalo){
//    // Calculamos la longitud del texto
//    longitud = texto.length;
//    // Obtenemos referencia del div donde se va a alojar el texto.
//    cnt = document.getElementById(contenedor);
//    var i=0;
//    // Creamos el timer
//    timer = setInterval(function(){
//       // Vamos añadiendo letra por letra y la _ al final.
//       cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + "_";
//       // Si hemos llegado al final del texto..
//       if(i >= longitud){
//          // Salimos del Timer y quitamos la barra baja (_)
//          clearInterval(timer);
//          cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
//          return true;
//       } else {
//          // En caso contrario.. seguimos
//          i++;
//       }},intervalo);
// };

// var texto = "Mi nombre es Carol Madeleine y sé que el diseño no tiene límites, donde sea que lo hagamos";
// // 100 es el intervalo de minisegundos en el que se escribirá cada letra.
// maquina("informacionAbout",texto,100);
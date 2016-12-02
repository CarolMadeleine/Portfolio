window.addEventListener("load", function(){
  var iconoMenu = document.getElementById("iconoMenu");
  var iconoCruz = document.getElementById("iconoCruz");
  var botonCerrar = document.getElementById("botonCerrar");
  var menuDesplegable = document.getElementById("menuDesplegable");
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

var texto = "Mi nombre es Carol Madeleine y sé que el diseño no tiene límites, donde sea que lo hagamos";
// 100 es el intervalo de minisegundos en el que se escribirá cada letra.
maquina("informacionAbout",texto,100);


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





















// window.addEventListener("scroll", function(){
//     if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
//             // mapa.style.display = "block";
//           $(".aboutMeMenu").addClass("block");  
//         } else{
//           $(".aboutMeMenu").addClass("hidden"); 
//           // mapa.style.display ="none";
//         };

// });



// $(document).ready(function(){
//   $(window).scroll(function(){ // check if scroll event happened
//     if($(document).scrollTop() == 0){
//       $(".logoNavbar").css("display", "none");
//     }
//     else if($(document).scrollTop() > 50){ // check if user scrolled more than 50 from top of the browser window
//       $(".navbar-fixed-top").css("background-color", "#282c37"); 
//       $(".logoNavbar").css("display", "inline-block");// if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
//     }else{
//       $(".navbar-fixed-top").css("background-color", "transparent"); // if not, change it back to transparent   
//     }
//   });
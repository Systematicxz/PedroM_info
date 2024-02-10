let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

// Función para cambiar la visibilidad al hacer clic en el h2
function mostrarElementos(idElemento) {
  var elementosMostrables = document.getElementById(idElemento);

  // Alternar la visibilidad y la opacidad para mostrar u ocultar los elementos
  if (elementosMostrables.style.visibility === "hidden") {
    elementosMostrables.style.visibility = "visible";
    elementosMostrables.style.opacity = 1;
  } else {
    elementosMostrables.style.visibility = "hidden";
    elementosMostrables.style.opacity = 0;
  }
}
//detecto el scrolling para aplicar la animacion de la barra de habilidades
// window.onscroll = function(){
//     efectoHabilidades();
// }

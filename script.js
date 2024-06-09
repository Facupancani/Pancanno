var spidey = document.getElementById("spidey");


//** ABRIR Y CERRAR MENU DESPLEGABLE */
var modo = true;
function activateMenu(){
    var barra1 = document.getElementById("rec1");
    var barra2 = document.getElementById("rec2");
    var barra3 = document.getElementById("rec3");
    var menu = document.getElementById("menu-desp");
    var menuText = document.getElementById("menu-text1");

    if(modo){
        barra1.style.animation = 'rote1 .5s ease forwards';
        barra2.style.animation = 'rote2 .5s ease forwards';
        barra3.style.animation = 'rote3 .5s ease forwards';
        menuText.textContent = "cerrar";
        abrirMenu(menu);
}else{
          barra1.style.animation = 'unrote1 .5s ease forwards';
          barra2.style.animation = 'unrote2 .5s ease forwards';
          barra3.style.animation = 'unrote3 .5s ease forwards';
          menuText.textContent = "menu";
        cerrarMenu(menu);
    }
    modo = !modo;
}


function abrirMenu(menu) {
          menu.style.animation = 'openMenu .5s ease forwards';
          menu.style.left = '0px';  // Ajuste final
          menu.style.opacity = "1"; // Ajuste final
      }

      function cerrarMenu(menu) {
          menu.style.animation = 'closeMenu .5s ease forwards';
          menu.style.left = '-300px';  // Ajuste final
          menu.style.opacity = "0";   // Ajuste final
      }
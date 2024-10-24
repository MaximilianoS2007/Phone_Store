document.addEventListener('DOMContentLoaded', function() {
    const menuBurger = document.querySelector('.menu-burger');  // El botón hamburguesa
    const menu = document.querySelector('.menu');               // El menú de navegación

    menuBurger.addEventListener('click', function() {
        menu.classList.toggle('active');  // Alternar la clase 'active' en el menú
    });
});
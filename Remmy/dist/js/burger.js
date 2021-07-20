
document.addEventListener("DOMContentLoaded", function(event) {
    var burger = document.querySelector('.header__burger');
    var menu = document.querySelector('.header__menu__burger');
    document.addEventListener('mouseup', function(e) {
        if(burger.contains(e.target)) {
            burger.classList.toggle('menu_active');
            menu.classList.toggle('menu_active');
        } else if(!menu.contains(e.target)) {
            burger.classList.remove('menu_active');
            menu.classList.remove('menu_active');
        }
    })
});

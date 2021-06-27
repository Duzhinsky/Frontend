$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__burger, .header__menu').toggleClass('active')
    })
    $('.header__menu__link').click(function() {
        $('.header__burger, .header__menu').removeClass('active')
    })
});
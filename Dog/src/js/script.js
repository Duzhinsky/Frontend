$('.header__extra__burger').on('click', function(e) {
      $('.main-page__bg-figure__wrapper').toggleClass("menu-active");
	  $('.main-page__bg-figure').toggleClass("menu-active");
	  $('.main-page__menu-content').toggleClass("menu-active");
      e.preventDefault();
});
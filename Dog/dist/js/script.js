$('.header__extra__burger').on('click', function(e) {
      $('.main-page__bg-figure__wrapper').toggleClass("menu-active");
	  $('.main-page__bg-figure').toggleClass("menu-active");
	  $('.main-page__menu-content').toggleClass("menu-active");

	  $('.header__extra__burger').toggleClass("icon-burger");
	  $('.header__extra__burger').toggleClass("icon-cancel");
      e.preventDefault();
});

$(".product__img").get().forEach(function(entry, index, array) {
    var cw = $(entry).width();
	$(entry).css({'height':cw*0.75675675675+'px'});
	console.log(cw);
});

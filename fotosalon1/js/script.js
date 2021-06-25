$('.icon-menu').click(function(event) {
   $(this).toggleClass('active');
   $('.menu_body').toggleClass('active');
   $('.header_logo').toggleClass('lock'); 
});

function ibg(){
    $.each($('.ibg'), function(index, val) {
        if($(this).find('img').length>0) {
            $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
        }
    });
}
    
ibg();
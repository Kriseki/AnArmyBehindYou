// HOME //
$('#main-picture-text').hide().delay(0500).fadeIn(2500);

$(document).ready(function() {
    $(window).scroll( function(){
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1300);     
            }         
        }); 
    });  
});

// 2017 //
$('.header-text').hide().delay(0500).fadeIn(2500);

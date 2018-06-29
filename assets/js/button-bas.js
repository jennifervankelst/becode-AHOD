
$(document).on('click','#gofooter',function() {        
        $('html, body').stop().animate({scrollTop:$('footer').position().top}, 500);        
        return false;
 });




$(document).ready(function(){
    
    var internal_height = $(window).innerHeight();
    var internal_width = $(window).innerWidth();
    //set header height
   if(innerWidth > 1100){
    var internal_height = $(window).innerHeight();
    $('header, header .carousel-inner').css('height', internal_height);
   }
    
});
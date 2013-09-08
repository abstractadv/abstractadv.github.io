// slider setting
MBP.scaleFix();
MBP.hideUrlBarOnLoad();
MBP.enableActive();
MBP.preventZoom();


$(document).ready(function(){
//  
//
//  //get viewport width
  var flipitemWidth = $(window).width() * 0.95;
//  var flipsnapitemcount =  $('.flipsnap > div').size();
//  var flipsnapwidth = flipitemWidth * flipsnapitemcount;
//
// add viewport width
//  $('.flipsnap > div').css('width', flipitemWidth);
$('.item').css('width', flipitemWidth);
// $('.swiper-slide').css('width', flipsnapwidth);
//
//
//  // Menu toogle open
  var togglemenu = $('#menu-toggle');
  togglemenu.on('click', function(e){
    // for disable link function
    event.preventDefault();
    $('#main-nav').addClass('slide-left-in');
  });
//  
  var toggleClose = $('#menu-toggle-close');
  toggleClose.on('click', function(e){
    event.preventDefault();
  $('#main-nav').removeClass('slide-left-in');
  });
//
}); //zepto doc ready function

//


  var mySwiper = new Swiper('.swiper-container',{
    //pagination: '.pagination',
    //paginationClickable: true,

    slidesPerView: 'auto'
  });
  
   var mySwiper = new Swiper('.swiper-vertical',{
    //pagination: '.pagination',
    //paginationClickable: true,
    mode: 'vertical',
    freeMode: true,
    freeModeFluid: true
  });





// flipsnap configuration
//Flipsnap('.flipsnaps');





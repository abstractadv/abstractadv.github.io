// slider setting
MBP.scaleFix();
MBP.hideUrlBarOnLoad();
MBP.enableActive();
MBP.preventZoom();


$(document).ready(function(){
  

  //get viewport width
  var flipitemWidth = $(window).width() * 0.98;
  var flipsnapitemcount =  $('.flipsnap > div').size();
  var flipsnapwidth = flipitemWidth * flipsnapitemcount;


  $('.flipsnap > div').css('width', flipitemWidth);
  $('.flipsnap').css('width', flipsnapwidth);


  // Menu toogle open
  var togglemenu = $('#menu-toggle');
  togglemenu.on('click', function(e){
    // for disable link function
    event.preventDefault();
    $('#main-nav').addClass('slide-left-in');
  });
  
  var toggleClose = $('#menu-toggle-close');
  toggleClose.on('click', function(e){
    event.preventDefault();
  $('#main-nav').removeClass('slide-left-in');
  });
  
  

//  $$('.item').swipeLeft(function(){
//    $('.flipsnap').css({
//      '-webkit-transform': 'translateZ(0)',
//      'transform': 'translate(-25%)',
//      '-webkit-transition':'all 1s',
//    });
//  });
//
//  $$('.item').swipeRight(function(){
//    $('.flipsnap').css({
//      'transform': 'translate(0)',
//      '-webkit-transform': 'translateZ(0)',
//      '-webkit-transition':'all 1s',
//    });
//  });
  

}); //zepto doc ready function

//


(function(){
  var ViewDetector = document.createElement('div');
  document.getElementsByTagName('body')[0].insertBefore(ViewDetector).id = 'viewport-detector';

  window.onresize = dynamicResizer;
  window.onload = dynamicResizer;

  function dynamicResizer() {
    var docWidth = window.innerWidth(),
        docHeight = window.innerHeight();
    spanDimensions.innerHTML = docWidth + "X" + docHeight;
  }



})




// flipsnap configuration
//Flipsnap('.flipsnap');





// ios patch
MBP.scaleFix();
MBP.hideUrlBarOnLoad();
MBP.enableActive();
MBP.preventZoom();


// full height
function fullHeightHero() {

  var fullHeightClass = document.getElementById("hero");
  var viewportHeight = (window.innerHeight * .75) + "px";

  fullHeightClass.style.height=viewportHeight;
}

function fullHeightContact() {

  var fullHeightClass = document.getElementById("contact");
  var viewportHeight = window.innerHeight + "px";

  fullHeightClass.style.height=viewportHeight;
}

fullHeightHero();
//fullHeightContact();








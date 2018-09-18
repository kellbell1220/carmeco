// FUNCTION FOR THE DROP DOWN MENU
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function openNav() {
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  var sideNavWidth;

  if (viewportWidth > 432){
    sideNavWidth = 20;
  }
  else{
    sideNavWidth = 40;
  }


  document.getElementById("mySidenav").style.width = (sideNavWidth +"vw");
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


// JQuery For Shrinking DIV
$(document).on("scroll", function(){

  if ($(document).scrollTop() > 100){
    $("header").addClass("shrink");
  } else {
    $("header").removeClass("shrink");
  }

});

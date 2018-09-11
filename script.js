// FUNCTION FOR THE DROP DOWN MENU
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function openNav() {
  document.getElementById("mySidenav").style.width = "160px";
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

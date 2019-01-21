var oldDiv = '#theBoss';
var oldLinkColor = '#LookAtMeTheBoss a:first';

var oldAboutDiv = '#about';
var oldAboutColor = 'AboutChoice';

var oldDivEquip = '';
var oldList = '';

var viewportWidth;

//Shrinking Header function
$(document).on("scroll", function(){
  if( $(window).width() >= 609){
    if ($(document).scrollTop() > 100){
      $("header").addClass("shrink");
    } //end if
    else {
      $("header").removeClass("shrink");
    }//end else
  }//end if
});

//used on the equipPage and The header on every page
//at smaller viewports
function toggleSideBar(id){
  $(id).toggle(1000);
}

// Used on the smaller viewports on equipment page
//toggles the stamp, brake lists
function toggleEquipList(list){
  if(oldList === list){
    $(list).toggle(1000);
    $(oldList + '.equip').css({'display': 'none'});
  }//end if
  else{
    $(list).toggle(1000);
    if(oldList != null){
      $(oldList).toggle(1000);
      $(oldList + '.equip').css({'display': 'none'});
    }//end if
  }//end else
}

//JQuery Function that Controls what
//Div will be shown on the equip page
var call = function ShowHideDivChangeColor(id, linkColor, list){
  if( $(window).width() <= 767){
    toggleEquipList(list);
    toggleTheDiv(id);
  }//end if

  else{
    if (id === oldDiv){
      $(id).show();
      $(linkColor).css({'color': '#e3eeaa'});
    }//end if
    else{
      $(id).show();//showing new div

      $(oldDiv).hide();//hiding previous div
      $(linkColor).css({'color': '#e3eeaa'});//changing current link to gold
      $(oldLinkColor).css({'color': '#bababa'});//changing previous link back to silver
    }//end else
  }//end first else
  //setting the id to the variable old ID
  //this way when the next element is selected
  //the styles will change
  oldDiv = id;
  oldLinkColor = linkColor;
}//End ShowHideDivChangeColor

// Used on smaller viewport on equip page
//to toggle image of equipment
function toggleTheDiv(id){
  if (id === oldDiv){
    $(id).toggle(1000);
  }//end if
  else{
    $(id).toggle(1000);//showing new div

    $(oldDiv).hide();//hiding previous div

    //setting the id to the variable old ID
    //this way when the next element is selected
    //the styles will change
    oldDiv = id;
  }//end else
}//end toggleTheDiv


//ABOUT PAGE FUNCTION
var callabout = function toggleTheAbout(aboutId, aboutLinkColor){
  if (aboutId === oldAboutDiv){

    $(aboutId).show();

    //using animate.css to switch divs
    $(aboutId).addClass('animated slideInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated slideInRight');
    });

    $(aboutLinkColor).addClass("highlight");
  }//end if
  else{
    $(aboutId).show();//showing new div

    //using animate.css to switch divs
    $(aboutId).addClass('animated slideInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated slideInRight');
    });

    $(oldAboutDiv).hide();//hiding previous div

    //setting CSS to show which page is currently in view
    $(aboutLinkColor).addClass("highlight");//changing current link to gold
    $(oldAboutColor).removeClass("highlight");//changing previous link back to silver

    //setting the id to the variable old ID
    //this way when the next element is selected
    //the styles will change
    oldAboutDiv = aboutId;
    oldAboutColor = aboutLinkColor;
  }//end else
}//end toggleTheDiv


//Used on EQUIP page to Direct user to the ABOUT page
//and then switches the slides to the TheBliss SECTION
function GoToBliss(){
  window.location = 'about.html#DisplayBliss';
}

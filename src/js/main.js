
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



$(document).ready(function(){
  $('.slider').bxSlider({
    auto:true,
    
  });
});

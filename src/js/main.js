
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

// owl slider
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    margin:20,
    loop:true,
    autoplay:true,
    responsive:{
      320:{
        items:1,
      },
      600:{
        items:2,
      },
      992:{
        items:3,
      },
      1200:{
        items:4,
      },
    }
  });
});
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}



  // /* construct manually */
  // var bar1 = new ldBar("#myItem1");
  // /* ldBar stored in the element */
  // var bar2 = document.getElementById('myItem1').ldBar;
  // bar1.set(60);

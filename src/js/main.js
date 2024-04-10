
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// $('.owl-carousel').owlCarousel({
//   loop:true,
//   margin:10,
//   nav:false,
//   items:4,
//   autoplay:true,
//   responsiveClass: true,
//   responsive: {
//       0:{
//         items: 1
//       },
//       480:{
//         items: 2
//       },
//       769:{
//         items: 4
//       }
//   }
// })
$(document).ready(function () {

  $(".owl-carousel").owlCarousel({
      // autoPlay: true,
      margin: 10,
      items: 4,
      responsive:{
              525:{
                  items:1,
              },
              787:{
                  items:2,
              },
              992:{
                  items:4,
              },
}
  });

})

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

$(document).ready(function(){
  $('.slider').bxSlider({
    auto:true,
    
  });
});





  // /* construct manually */
  // var bar1 = new ldBar("#myItem1");
  // /* ldBar stored in the element */
  // var bar2 = document.getElementById('myItem1').ldBar;
  // bar1.set(60);

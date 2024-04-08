
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      992:{
          items:3
      },
      1500:{
          items:5
      }
  }
})



$(document).ready(function(){
  $('.slider').bxSlider({
    auto:true,
    
  });
});


  /* construct manually */
  var bar1 = new ldBar("#myItem1");
  /* ldBar stored in the element */
  var bar2 = document.getElementById('myItem1').ldBar;
  bar1.set(60);

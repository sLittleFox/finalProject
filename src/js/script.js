$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 4,
      dots: false,
      nav: true,
      loop: true,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: true,
      smartSpeed: 1550,
      
      responsive:{
        0:{
            items:1,

        },
        580:{
            items:2,
        },
        880:{
            items:3,
      },
        1100:{
            items:4,

        }
    }
    });

  });


  
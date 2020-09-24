$(document).ready(function() {


    var $header = $('header'); //for main header
    var $sticky = $header.before($header.clone().addClass("sticky")); //making a clone of header

    $(window).on("scroll", function(){
      var scrollFromTop = $(window).scrollTop();
      $("body").toggleClass("scroll", (scrollFromTop > 350));
    }); //whenever we scrool past 350, a 'scroll' class will be added to body which has some css styles, and so the sticky header appears

      //SMOOTH SCROLL
      $('.menu li a[href^="#"]').on('click', function(e){ //this means whenever we click on any href, something will happen coz of the function
          e.preventDefault(); //we are removing default style as it does not look good,coz the header shows in every section

          var target = $(this.hash); //if we click on 'home' the target will store home value

          if (target.length) { //if every option has an id then only it works
              $('html, body').stop().animate({
                  scrollTop: target.offset().top -60 //as we want the sticky header not to cover the section heading so -60
              }, 1000); //1000 mns whole animation will last for 1 second
          }

      });

/*to scroll to particular section on clicking starting buttons*/
      $('#scene li a[href^="#"]').on('click', function(e){ //this means whenever we click on any href, something will happen coz of the function
          e.preventDefault(); //we are removing default style as it does not look good,coz the header shows in every section

          var target = $(this.hash); //if we click on 'home' the target will store home value

          if (target.length) { //if every option has an id then only it works
              $('html, body').stop().animate({
                  scrollTop: target.offset().top -60 //as we want the sticky header not to cover the section heading so -60
              }, 1000); //1000 mns whole animation will last for 1 second
          }

      });


    // MASONRY
    $('.grid').masonry({
        //options
        itemSelector: '.grid-item',
        columnWidth: 120,
        fitWidth: true,
        gutter: 0
    });

    //SLICK SLIDER
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed:1500,
        arrows: true,
        dots: false,
        centerMode: true,
        slidesToShow: 3, /*shows 3 pics at a time*/
        fade:false,
        prevArrow:'<button type="button" class="slick-prev">Previous</button>',
        nextArrow:'<button type="button" class="slick-next">Previous</button>',
//to make slider responsive
        responsive: [
          {
              breakpoint: 990,
              settings: {
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1
              }
          }
        ]
    });


      //RESPONSIVE MENU START

      var body = $('body');
      var menuTrigger = $('.js-menu-trigger'); //it holds div
      var mainOverlay = $('.js-main-overlay');

//to make menu appear from right when we click hamburger icon
      menuTrigger.on('click', function(){
        body.addClass('menu-is-active');
      });

      mainOverlay.on('click', function(){
        body.removeClass('menu-is-active');
      });

      $('.menu li a').on('click', function(){
          $('body').removeClass("menu-is-active");
      });


});

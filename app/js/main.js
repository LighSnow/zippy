$(function () {


  $('.slider__inner').slick({
    dots: true,
    arrows: false,

  });

  /*Burger Menu */
  $('.burger-menu').on('click', function () {

    $('.header__nav').slideToggle(300, function () {
      if ($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }

    });

  });


  /*Slider */
  $('.video-slider__inner').slick({
    centerMode: true,
    slidesToShow: 1,
    centerPadding: '60px',
    variableWidth: true,
    arrows: false,
    responsive: [{
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        infinite: false,
        dots: true
      }
    }]
  });


  $('.life__slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.life__slider-nav'
  });


  $('.life__slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.life__slider-for',
    dots: false,
    focusOnSelect: true,
    variableWidth: true,
    responsive: [{
      breakpoint: 730,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    }],
    responsive: [{
      breakpoint: 501,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      }
    }]
  });









  /* Slider Btn*/
  $('.slick-next').click(function () {
    $('.slick-next').addClass('active');
    $('.slick-prev').removeClass('active');
  });

  $('.slick-prev').click(function () {
    $('.slick-prev').addClass('active');
    $('.slick-next').removeClass('active');
  });



  /* Fixed Header*/
  let header = $("#header");
  let slider = $("#slider");
  let sliderH = slider.innerHeight();
  let scrollPos = $(window).scrollTop();

  checkScroll(scrollPos, sliderH);

  $(window).on("scroll load resize", function () {
    let sliderH = slider.innerHeight();
    scrollPos = $(this).scrollTop();

    checkScroll(scrollPos, sliderH);
  });

  function checkScroll(scrollPos, sliderH) {
    if (scrollPos > sliderH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }


  /*Smooth Scroll */

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let elementID = $(this).data("scroll");
    let elementOffset = $(elementID).offset().top;

    console.log(elementOffset);

    $("html, body").animate({
      scrollTop: elementOffset - 50
    }, 700);

  });



});
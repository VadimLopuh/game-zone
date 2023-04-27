$(document).ready(function(){
    $('.layout__content').slick({
        dots: true,
        infinite: true,
        speed: 1500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: false
      });
  });

  $(document).ready(function(){
    $('.catalog__content').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        centerMode: true,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></button>'
      });
  });
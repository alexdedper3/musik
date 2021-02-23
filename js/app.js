$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows:true,
        dots:false,
        speed:1000,
        eaesing:"ease",
        infinite:true,
        initialSlide:1,
        // autoplay:true,
        autoplaySpeed:3000,
        pauseOnFocus:true,
        pauseOnHover:true,
        touchThreshold:10,
      });
      
});
$('.bi').hover(
  function() {
    $('.big').show();
  },
  function() {
    $('.big').hide();
  }
);

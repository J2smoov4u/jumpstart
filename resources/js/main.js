// JQUERIES
$(document).ready(function() {
  $('.single-item').slick();

  });
});
//Single item slide
$('.single-item').slick();
// Fade
$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

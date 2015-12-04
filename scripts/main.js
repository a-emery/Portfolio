$('#js_aboutLink').click(function(){
  $.scrollTo($('#about') , 800);
  return false;
});

$('#js_projectsLink').click(function(){
  $.scrollTo($('#projects') , 800);
  return false;
});

$('#js_contactLink').click(function(){
  $.scrollTo($('#contact') , 800);
  return false;
});

$('#js_topLink').click(function(){
  $.scrollTo($('html'), 800);
  return false;
});

$('.headerArrowContainer').hover(function() {
  $('.headerArrow').css("display", "none");
  $('.headerArrowHover').css("display", "block");
}, function() {
  $('.headerArrow').css("display", "block");
  $('.headerArrowHover').css("display", "none");
});

var isVisible = false;

$(window).scroll(function(){
     var shouldBeVisible = $(window).scrollTop()>($('.heroContent').css('height').slice(0, -2) - 1);
     if (shouldBeVisible && !isVisible) {
          isVisible = true;
          $('.headerArrowContainer').css("display", "inline-block");
     } else if (isVisible && !shouldBeVisible) {
          isVisible = false;
          $('.headerArrowContainer').css("display", "none");
    }
});

// FORM

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

$('.hamburger').click(function(){
  if($('.hamburgerList').css("z-index") === "-3") {
    $('.hamburgerList').css("z-index", "3");
    $('.hamburgerList').css("opacity", "1");
  } else if ($('.hamburgerList').css("z-index") === "3") {
    $('.hamburgerList').css("z-index", "-3");
    $('.hamburgerList').css("opacity", "0");
  }
});

$('.hamburgerListItemLink').click(function(){
  $('.hamburgerList').css("z-index", "-3");
  $('.hamburgerList').css("opacity", "0");
});

$('.headerArrowContainer').hover(function() {
  $('.headerArrow').css("display", "none");
  $('.headerArrowHover').css("display", "block");
}, function() {
  $('.headerArrow').css("display", "block");
  $('.headerArrowHover').css("display", "none");
});

// Code to make top button appear at certain height //

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

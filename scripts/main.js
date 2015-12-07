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
  if($('.hamburgerList').css("left") === "-2000px") {
    $('.hamburgerList').css("left", "0px");
    $('.hamburgerList').css("right", "0px");
  } else if ($('.hamburgerList').css("left") === "0px") {
    $('.hamburgerList').css("left", "-2000px");
    $('.hamburgerList').css("right", "2000px");

  }
});

$('.hamburgerListItemLink').click(function(){
  $('.hamburgerList').css("left", "-2000px");
  $('.hamburgerList').css("right", "2000px");
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
//
// $('.hamburger').click(function(){
//   if ($('.hamburger').css("transform") === 'matrix(1, 0, 0, 1, 0, -10)') {
//     console.log('goodbye');
//   $('.hamburger').css("transform", "rotate(180deg)");
//   $('.hamburger').css("margin-left", "none");
// } else if ($('.hamburger').css("transform") === 'matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)'){
//   console.log('hello');
//   $('.hamburger').css("transform", "matrix(1, 0, 0, 1, 0, -10)");
//   }
// });


// transform: rotate(45deg);


document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
  this.classList.toggle( "active" );
});

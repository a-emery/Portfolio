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
    $('.hamburgerTopOfPage').css("display", "inline-block");
    $('.hamburgerTopOfPage').css("opacity", ".8");
  } else if ($('.hamburgerList').css("left") === "0px") {
    $('.hamburgerList').css("left", "-2000px");
    $('.hamburgerList').css("right", "2000px");
    $('.hamburgerTopOfPage').css("display", "none");
    $('.hamburgerTopOfPage').css("opacity", "0");
  }
});

$('.js_hamburgerClick').click(function(){
  $('.hamburgerList').css("left", "-2000px");
  $('.hamburgerList').css("right", "2000px");
  $('.hamburgerTopOfPage').css("display", "none");
  $('.hamburgerTopOfPage').css("opacity", "0");
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

$(document).ready(function() {
  var shouldBeVisible = $(window).scrollTop()>($('.heroContent').css('height').slice(0, -2) - 1);
  if (shouldBeVisible && !isVisible) {
       isVisible = true;
       $('.headerArrowContainer').css("display", "inline-block");
  } else if (isVisible && !shouldBeVisible) {
       isVisible = false;
       $('.headerArrowContainer').css("display", "none");
 }
});

// Code to make top button appear at certain height //

var aboutVisible, skillsVisibleLeft, skillsVisibleRight = false;


function showAbout() {
	if ( $(window).scrollTop() > $('.aboutMe').offset().top - $(window).height() ) {
		$('.aboutMe').removeClass('aboutMeHidden');
		aboutVisible = true;
	}
}

function showSkillsLeft() {
	if ( $(window).scrollTop() > $('.aboutSkillSetContainerLeft').offset().top - $(window).height() ) {
		$('.aboutSkillSetContainerLeft .skillSlider').removeClass('skillHidden');
		skillsVisibleLeft = true;
	}
}

function showSkillsRight() {
	if ( $(window).scrollTop() > $('.aboutSkillSetContainerRight').offset().top - $(window).height() ) {
		$('.aboutSkillSetContainerRight .skillSlider').removeClass('skillHidden');
		skillsVisibleRight = true;
	}
}

function checkAnimations() {
	if (!aboutVisible) {
		showAbout();
	}
	if (!skillsVisibleLeft) {
		showSkillsLeft();
	}
	if (!skillsVisibleRight) {
		showSkillsRight();
	}
}

$(document).ready(function() {
	checkAnimations();

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
		if ($('.hamburgerList').css("left") === "-2000px") {
			$('.hamburgerList').css("left", "0px");
			$('.hamburgerList').css("right", "0px");
		} else if ($('.hamburgerList').css("left") === "0px") {
			$('.hamburgerList').css("left", "-2000px");
			$('.hamburgerList').css("right", "2000px");
		}
	});

	$('.js_hamburgerClick').click(function(){
		$('.hamburgerList').css("left", "-2000px");
		$('.hamburgerList').css("right", "2000px");
	});

	$('.headerArrowContainer').hover(function() {
			$('.headerArrow').css("display", "none");
			$('.headerArrowHover').css("display", "block");
		}, function() {
			$('.headerArrow').css("display", "block");
			$('.headerArrowHover').css("display", "none");
		}
	);
	var isVisible;
	var shouldBeVisible = $(window).scrollTop()>($('.heroContent').css('height').slice(0, -2) - 1);
	if (shouldBeVisible && !isVisible) {
		isVisible = true;
		$('.headerArrowContainer').css("display", "inline-block");
		$('.hamburgerTopOfPage').css("opacity", "1");
		$('.hamburgerTopOfPage').css("display", "inline-block");
	} else if (isVisible && !shouldBeVisible) {
		isVisible = false;
		$('.headerArrowContainer').css("display", "none");
		$('.hamburgerTopOfPage').css("opacity", "0");
		$('.hamburgerTopOfPage').css("display", "none");
	}

	$(window).scroll(function(){
		checkAnimations();
		var shouldBeVisible = $(window).scrollTop()>($('.heroContent').css('height').slice(0, -2) - 1);
		if (shouldBeVisible && !isVisible) {
			isVisible = true;
			$('.headerArrowContainer').css("display", "inline-block");
			$('.hamburgerTopOfPage').css("opacity", "1");
			$('.hamburgerTopOfPage').css("display", "inline-block");
		} else if (isVisible && !shouldBeVisible) {
			isVisible = false;
			$('.headerArrowContainer').css("display", "none");
			$('.hamburgerTopOfPage').css("opacity", "0");
			$('.hamburgerTopOfPage').css("display", "none");
		}
	});

	var date = new Date();
	var year = date.getFullYear();
	$('.copyright-year').html(year);
});

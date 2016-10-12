$(document).ready(function(){
	$('.slider').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  adaptiveHeight: true
	});

	$('.slider-1').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 2,
	  autoplay: false,
	  autoplaySpeed: 2000,
	  adaptiveHeight: true
	});

});
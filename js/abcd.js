jQuery(document).ready(function($) {
	var width = $( window ).width();
	if(width <'1240'){
		$(".site-menu").hide();
	}

 $(".hamburger").click(function(){
   console.log(".hamburger");   
   $(".site-menu").addClass('responsive');
   $(".site-menu").slideToggle(990);
	});

	$(".accordion").click(function() {
	  var $this = $(this).toggleClass('active');
	  var $panel = $this.next().toggleClass('show');
	  $('.accordion.active').not(this).removeClass('active').next().removeClass('show');
	});

	// for myslides class in the footer-1 class of popular post 
	$(".left").click(function() {
		$(".fade1").css({"display":"block"});
		$(".fade2").css({"display":"none"});
	});

	$(".right").click(function() {
		$(".fade2").css({"display":"block"});
		$(".fade1").css({"display":"none"});
	});
});






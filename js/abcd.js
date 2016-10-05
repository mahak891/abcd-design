jQuery(document).ready(function($) {
 $(".hamburger").click(function(){
     // $(".site-menu").toggleClass('show');
     // $("ul.main-nav").toggleClass('responsive');
     $("ul.main-nav").addClass('responsive');
     $("ul.main-nav").slideToggle();

});
});
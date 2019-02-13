 jQuery(document).ready(function($) {


$('.links').hide();

  
$('#event-gallery').on('click',function(){
 blueimp.Gallery($('#links a'), $('#blueimp-gallery').data('gallery'));

 	blueimp.Gallery(

		document.getElementById('links').getElementsByTagName('a'),
		{
			container: '#blueimp-gallery',
			carousel: true,
			onslide: function (index, slide) {
				// Callback function executed on slide change.
				var $anchor = jQuery(this.list[index]);
                var unique_id = $anchor.data('unique-id');
                jQuery(this.css({width:100%,height:100%}));
			}
		}
	);
});
 
 
 
    $(".scroll a, .navbar-brand, .gototop").click(function(event){   
	    event.preventDefault();
    	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 600,'swing');
	    $(".scroll li").removeClass('active');
	    $(this).parents('li').toggleClass('active');
    });

});






var wow = new WOW(
  {
    boxClass:     'wowload',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true        // act on asynchronously loaded content (default is true)
  }
);
wow.init();




$('.carousel').swipe( {
     swipeLeft: function() {
         $(this).carousel('next');
     },
     swipeRight: function() {
         $(this).carousel('prev');
     },
     allowPageScroll: 'vertical'
 });





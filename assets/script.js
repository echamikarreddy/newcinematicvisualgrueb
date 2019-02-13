 jQuery(document).ready(function($) {

$('.portraitlinks').hide();
  
$('#portrait-gallery').on('click',function(){
 blueimp.Gallery($('#portraitlinks a'), $('#blueimp-gallery').data());

 	blueimp.Gallery(

		document.getElementById('links').getElementsByTagName('a'),
		{
			container: '#blueimp-gallery',
			carousel: true,
			onslide: function (index, slide) {
				// Callback function executed on slide change.
				var $anchor = jQuery(this.list[index]);
                var event_id = $anchor.data('portrait-id');
                jQuery(this.css({width:100%,height:100%}));
			}
		}
	);
});

$('.cinemalinks').hide();
  
$('#cinema-gallery').on('click',function(){
 blueimp.Gallery($('#cinemalinks a'), $('#blueimp-gallery').data());

 	blueimp.Gallery(

		document.getElementById('links').getElementsByTagName('a'),
		{
			container: '#blueimp-gallery',
			carousel: true,
			onslide: function (index, slide) {
				// Callback function executed on slide change.
				var $anchor = jQuery(this.list[index]);
                var event_id = $anchor.data('cinema-id');
                jQuery(this.css({width:100%,height:100%}));
			}
		}
	);
});

$('.fashionlinks').hide();
  
$('#fashion-gallery').on('click',function(){
 blueimp.Gallery($('#fashionlinks a'), $('#blueimp-gallery').data());

 	blueimp.Gallery(

		document.getElementById('links').getElementsByTagName('a'),
		{
			container: '#blueimp-gallery',
			carousel: true,
			onslide: function (index, slide) {
				// Callback function executed on slide change.
				var $anchor = jQuery(this.list[index]);
                var event_id = $anchor.data('fashion-id');
                jQuery(this.css({width:100%,height:100%}));
			}
		}
	);
});

$('.eventlinks').hide();
  
$('#event-gallery').on('click',function(){
 blueimp.Gallery($('#eventlinks a'), $('#blueimp-gallery').data());

 	blueimp.Gallery(

		document.getElementById('links').getElementsByTagName('a'),
		{
			container: '#blueimp-gallery',
			carousel: true,
			onslide: function (index, slide) {
				// Callback function executed on slide change.
				var $anchor = jQuery(this.list[index]);
                var event_id = $anchor.data('event-id');
                jQuery(this.css({width:100%,height:100%}));
			}
		}
	);
});

$('.weddinglinks').hide();
  
$('#wedding-gallery').on('click',function(){
 blueimp.Gallery($('#weddinglinks a'), $('#blueimp-gallery').data());

 	blueimp.Gallery(

		document.getElementById('links').getElementsByTagName('a'),
		{
			container: '#blueimp-gallery',
			carousel: true,
			onslide: function (index, slide) {
				// Callback function executed on slide change.
				var $anchor = jQuery(this.list[index]);
                var wedding_id = $anchor.data('wedding-id');
                jQuery(this.css({width:100%,height:100%}));
			}
		}
	);
});
 

$('.exclusiveshootlinks').hide();
  
$('#exclusiveshoot-gallery').on('click',function(){
 blueimp.Gallery($('#exclusiveshootlinks a'), $('#blueimp-gallery').data());

 	blueimp.Gallery(

		document.getElementById('links').getElementsByTagName('a'),
		{
			container: '#blueimp-gallery',
			carousel: true,
			onslide: function (index, slide) {
				// Callback function executed on slide change.
				var $anchor = jQuery(this.list[index]);
                var wedding_id = $anchor.data('exclusiveshoot-id');
                jQuery(this.css({width:100%,height:100%}));
			}
		}
	);
});
$('.passionlinks').hide();
  
$('#passion-gallery').on('click',function(){
 blueimp.Gallery($('#passionlinks a'), $('#blueimp-gallery').data());

 	blueimp.Gallery(

		document.getElementById('links').getElementsByTagName('a'),
		{
			container: '#blueimp-gallery',
			carousel: true,
			onslide: function (index, slide) {
				// Callback function executed on slide change.
				var $anchor = jQuery(this.list[index]);
                var wedding_id = $anchor.data('passion-id');
                jQuery(this.css({width:100%,height:100%}));
			}
		}
	);
});
 $('.mobilelinks').hide();
  
$('#mobile-gallery').on('click',function(){
 blueimp.Gallery($('#mobilelinks a'), $('#blueimp-gallery').data());

 	blueimp.Gallery(

		document.getElementById('mobilelinks').getElementsByTagName('a'),
		{
			container: '#blueimp-gallery',
			carousel: true,
			onslide: function (index, slide) {
				// Callback function executed on slide change.
				var $anchor = jQuery(this.list[index]);
                var mobile_id = $anchor.data('mobile-id');
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





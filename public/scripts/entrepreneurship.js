// $(function() {
// 	$('.lazy').Lazy();
// 	$('.carousel.carousel-slider').carousel({fullWidth: true});
// });

(function($){
	$(function(){
		$('.lazy').Lazy({
			visibleOnly: true,
			effect: 'fadeIn',
			scrollDirection: 'both'
		});
		$('.carousel.carousel-slider').carousel({fullWidth: true, noWrap: true, indicators: true});
	});
})(jQuery);
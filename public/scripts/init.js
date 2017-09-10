(function($){
	$(function(){
		// $('.button-collapse').sideNav();
		$('.parallax').parallax();
	}); // end of document ready
})(jQuery); // end of jQuery name space

// $('.button-collapse').sideNav(
// 	{
// 		menuWidth: 300, // Default is 300
// 		// edge: 'right', // Choose the horizontal origin
// 		// closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
// 		// draggable: true, // Choose whether you can drag to open on touch screens,
// 		onOpen: function(el) {
// 			$(el).css({'width': 300, 'transform': 'translateX(0) !important'});
// 		},
// 		onClose: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is closed
// 	}
// );

var navOpen = false;
var $body = $('body');
var oldWidth = $body.innerWidth();
var nav = $('.button-collapse').data('activates');

$('#sidenav-overlay').on('click', function () {
	$('#' + nav).css({'width': '50px'}).removeClass('nav-active').addClass('nav-inactive');
	$('body').css({
		overflow: '',
		width: ''
	});
	$('#sidenav-overlay').animate({
		opacity: 0
	}, 150, function () {
		$(this).css({'display': 'none'});
	});
	navOpen = false;
});

$('.button-collapse').on('click', function (e) {
	e.preventDefault();
	if (navOpen) {
		$('#' + nav).css({'width': '50px'}).removeClass('nav-active').addClass('nav-inactive');
		$('body').css({
			overflow: '',
			width: ''
		});
		$('#sidenav-overlay').animate({
			opacity: 0
		}, 150, function () {
			$(this).css({'display': 'none'});
		});
	}
	else {
		$('#' + nav).css({'width': '210px'}).removeClass('nav-inactive').addClass('nav-active');
		$body.css('overflow', 'hidden');
		$body.width(oldWidth);
		$('#sidenav-overlay').css({'display': 'block'});
		$('#sidenav-overlay').animate({
			opacity: 1
		}, 200);
	}
	navOpen = !navOpen;
});
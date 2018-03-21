(function($){
	$(function(){
		$('.button-collapse').sideNav();
		$('.parallax').parallax();
	}); // end of document ready
})(jQuery); // end of jQuery name space

var navOpen = false;
var $body = $('body');
var oldWidth = $body.innerWidth();
var nav = $('.side-menu').data('activates');

$('#sidenav-grey').on('click', function () {
	$('#' + nav).css({'width': '50px'}).removeClass('nav-active').addClass('nav-inactive');
	$('body').css({
		overflow: '',
		width: ''
	});
	$('#sidenav-grey').animate({
		opacity: 0
	}, 150, function () {
		$(this).css({'display': 'none'});
	});
	navOpen = false;
});

$('.side-menu').on('click', function (e) {
	e.preventDefault();
	if (navOpen) {
		$('#' + nav).css({'width': '50px'}).removeClass('nav-active').addClass('nav-inactive');
		$('body').css({
			overflow: '',
			width: ''
		});
		$('#sidenav-grey').animate({
			opacity: 0
		}, 150, function () {
			$(this).css({'display': 'none'});
		});
	}
	else {
		$('#' + nav).css({'width': '210px'}).removeClass('nav-inactive').addClass('nav-active');
		$body.css('overflow', 'hidden');
		$body.width(oldWidth);
		$('#sidenav-grey').css({'display': 'block'});
		$('#sidenav-grey').animate({
			opacity: 1
		}, 200);
	}
	navOpen = !navOpen;
});
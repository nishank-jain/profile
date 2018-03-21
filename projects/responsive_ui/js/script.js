$(document).ready(function() {
    $(window).scroll(function () {
		if (window.scrollY === 0) {
			$('#header').css('background-color', 'transparent');
			$('#header').css('transition', 'background-color 0.1s linear 0s');
			$('#header').css('box-shadow', 'none');
			$('.nav-dropdown').css('box-shadow', 'none');
		}
		else {
			$('#header').css('background-color', '#262634');
			$('#header').css('transition', 'background-color 0.1s linear 0s');
			$('#header').css('box-shadow', '0px 2px 5px 0px rgba(0,0,0,0.75)');
			$('.nav-dropdown').css('box-shadow', '0px 2px 5px 0px rgba(0,0,0,0.75)')
		}
	});

    var sideNavOpen = false;
    var sideDropdownOpen = false;

	$('#ham-menu').click(function() {
		if (!sideNavOpen) {
			$('html').css('overflow', 'hidden');
			$('#hidden-layer').css('display', 'block');
			
			$('#side-nav').css('left', '0px');
			$('#side-nav').css('transition', 'left 0.2s linear 0s, box-shadow 0.2s linear 0s');
			$('#header').css('background-color', '#262634');
			$('#header').css('box-shadow', '0px 2px 5px 0px rgba(0,0,0,0.75)');
			$('#side-nav').css('box-shadow', '1px 0px 9px 1px rgba(112,112,112,1)');
		}
		else {
			$('html').css('overflow', 'auto');
			$('#hidden-layer').css('display', 'none');
			$('#side-nav').css('left', '-150px');
			$('#side-nav').css('transition', 'left 0.2s linear 0s, box-shadow 0.2s linear 0s');
			$('#side-nav').css('box-shadow', 'none');
			if (window.scrollY === 0) {
				$('#header').css('background-color', 'transparent');
				$('#header').css('box-shadow', 'none');
			}
		}
		sideNavOpen = !sideNavOpen;
	});

	$("#side-nav > div:not('.side-dropdown-menu'), #hidden-layer").click(function () {
		$('html').css('overflow', 'auto');
		$('#hidden-layer').css('display', 'none');
		$('#side-nav').css('left', '-150px');
		$('#side-nav').css('transition', 'left 0.2s linear 0s, box-shadow 0.2s linear 0s');
		$('#side-nav').css('box-shadow', 'none');
		if (window.scrollY === 0) {
				$('#header').css('background-color', 'transparent');
				$('#header').css('box-shadow', 'none');
		}
		sideNavOpen = !sideNavOpen;
	});

	$('#scroll-content').click(function () {
		$("html, body").animate({
          scrollTop: 570
        }, 500);
	});

	$('.dropdown-menu').hover(
		function() {
  			$('.nav-dropdown').fadeIn(200).css('display', 'block');
  			if (window.scrollY === 0) {
				$('.nav-dropdown').css('box-shadow', 'none');
			}
			else {
				$('.nav-dropdown').css('box-shadow', '0px 2px 5px 0px rgba(0,0,0,0.75)');
			}
		}, 
		function() {
	  		$('.nav-dropdown').fadeOut(200).css('display', 'none');
		}
	);

	$('.dropdown-menu-item').click(function () {
		if (!sideDropdownOpen) {
			$('.side-nav-dropdown').css('display', 'block');
		}
		else {
			$('.side-nav-dropdown').css('display', 'none');
		}
		sideDropdownOpen = !sideDropdownOpen;
	});

	$(window).resize(function() {
		if (sideNavOpen && $(window).width() >= 1024) {
	  		$('html').css('overflow', 'auto');
			$('#hidden-layer').css('display', 'none');
			$('#side-nav').css('left', '-150px');
			$('#side-nav').css('transition', 'left 0.2s linear 0s, box-shadow 0.2s linear 0s');
			$('#side-nav').css('box-shadow', 'none');
			sideNavOpen = !sideNavOpen;
		}
	});
});
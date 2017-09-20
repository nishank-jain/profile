$(document).on('focus',".groundQuery",function(e){
    $(this).addClass('active');
    $("ul.search-results").addClass('active');
    event.stopPropagation();
});
$(document).on('click','.groundQuery', '.search-results', function(e) {
    e.stopPropagation();
});
$(document).on('click', function(e) {
    $('.groundQuery').removeClass('active');
    $('ul.search-results').removeClass('active');
});

// $(document).on('focus',".groundQuery",function(e){
//     $(this).addClass('active');
//     $("ul.search-results").addClass('active')
// }).on('blur','.groundQuery',function(e) {
//     $(this).removeClass('active');
//     $("ul.search-results").removeClass('active')
// });

// $(document).on('focus',".groundQuery",function(e){
//     $(this).addClass('active');
//     $("ul.search-results").addClass('active')
// });
$(document).on({
    mouseenter: function() {
        var sportsName = $(this).children('img').attr('alt');
        var divHtml = "<div class='hoverSports'>"+sportsName+"</div>";
        $(this).append(divHtml);
    },
    mouseleave: function() {
        $('.hoverSports').remove();
    }
}, 'ul.search-results>li span');

$(document).ready(function() {
    $("ul.search-results li").addClass('selected');

    var loc = window.location;
    var hash = loc.hash;
    hash = hash.split("/");
    var id = hash[1];

    $('.groundQuery').bind("change keyup paste mousenter",function(){
        var searchQuery = $(this).val();
        var searchString = '';

        $('ul.search-results > li').each(function(i) {
            searchString = $(this).attr('areaTags')+','+$(this).text();
            $(this).children('span').children('img').each(function(i){
                searchString = searchString +','+ $(this).attr('alt');
            });
            if (searchString.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1){
                $(this).addClass('selected');
            } else {
                $(this).removeClass('selected');
            }
        });
        if (searchQuery == ''){
            $("ul.search-results li").addClass('selected');
        }
    });
    $(document).on('click',".availableSports li",function(e){
        $('.availableSports li').removeClass('active');
        $(this).addClass('active');
    })
});

$(document).on('click',".gallery>li",function(e){
//	var sporType = $(this).attr("class");
    var pswpElement = document.querySelectorAll('.pswp')[0];
    var currentItem = $(this).children('img').attr("src");
    // build items array
    var items = [];
    var insideItmes = [];
    var startPoint = 0;
    var size = "";
    $('.gallery>li').each(function(i) {
        insideItmes = [];
        size = "";
        if ($(this).children('img').attr("src") == currentItem){
            startPoint = i;
        }
        insideItmes = {
            src: $(this).children('img').attr("src").replace('thumb/',''),
            title: 'Test',
            w: 900,
            h: 600
        };
        items.push(insideItmes);
    });
    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: startPoint // start at first slide
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
    $(".pswp__bg").css("opacity","0.8");
    $(".pswp").css("z-index","1000000000");
});

$( window ).resize(function() {
  adjustScreenFit();
});
adjustScreenFit();

function adjustScreenFit(){
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	if (windowWidth < 1100 && windowWidth >700) {
		$(".mobile").addClass("tablet");
		$(".mobile").removeClass("enable");
	} else if (windowWidth < 700) {
		$(".mobile").addClass("enable");
		$(".mobile").removeClass("tablet");
	} else {
		$(".mobile").removeClass("tablet");
		$(".mobile").removeClass("enable");
	}
}

var showMap = false;

$('#showMap').on('click', function () {
    if (!showMap) {
        $(".mapContent").css({'z-index': '10'});
        $(".groundInfo").css({'color': '#000'});
        $("#linkImage").css({'color': '#000', 'border-color': '#000'});
        $('#showMap').html("Back to Ground Image");
        $('.coverIcon').css({'display': 'inline-block'});
        $('.mapIcon').css({'display': 'none'});
    }
    else {
        $(".mapContent").css({'z-index': '0'});
        $(".groundInfo").css({'color': '#fff'});
        $("#linkImage").css({'color': '#fff', 'border-color': '#fff'});
        $('#showMap').html("Locate on Google Maps");
        $('.mapIcon').css({'display': 'inline-block'});
        $('.coverIcon').css({'display': 'none'});
    }
    showMap = !showMap;
});

var latlongPair = latLong.split(',');
var lat = parseFloat(latlongPair[0]);
var lng = parseFloat(latlongPair[1]);
var style = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#727272"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];

function initMap () {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: lat, lng: lng},
        zoom: 15,
        styles: style
    });
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        map: map
    });
}
$('input#emailId').keyup(function(){
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(regex.test($(this).val())){
			$(this).removeClass("error");
			$('#infoSpan:not(.enable)').transition({ width: 120 });
			$('#infoSpan').transition({ background: '#81d87b' },200);
			$('#infoSpan').html($('#infoSpan').attr('goodEmail'))
			$('#infoSpan').addClass('enabled');
		}
});
$('input#emailId').focus(function(){
	if($(this).val() == $(this).attr('defaultVal') || $(this).val() == $(this).attr('errorMsg')){
		$(this).val('');
		$(this).transition({color: '#fff'});
		$(this).removeClass('error');
	$('#infoSpan:not(.enable)').transition({ width: 350 });
	$('#infoSpan').transition({ background: '#444' },200);
	$('#infoSpan').html($('#infoSpan').attr('emailActive'));
	$('#infoSpan').removeClass('enabled');
	}			
}).blur( function(){
	if($(this).val() == '' || $(this).val() == null){
		$(this).val($(this).attr('defaultVal'));
		$(this).transition({color: '#fff'});
		$(this).removeClass('active');
		$(this).removeClass('error');
		$('#infoSpan:not(.enable)').transition({ width: 300 });
		$('#infoSpan').transition({ background: '#fec107' },200);
		$('#infoSpan').removeClass('enabled');
		$('#infoSpan').html($('#infoSpan').attr('defaultTxt'));

	} else {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(!regex.test($(this).val())){
			$('#infoSpan:not(.enable)').transition({ width: 260 });
			$('#infoSpan').transition({ background: '#e88470' },200);
			$(this).addClass("error");
			$('#infoSpan').removeClass('enabled');
			$('#infoSpan').html($('#infoSpan').attr('errorMsg'))
		} else {
			$(this).removeClass("error");
			$('#infoSpan:not(.enable)').transition({ width: 120 });
			$('#infoSpan').transition({ background: '#81d87b' },200);
			$('#infoSpan').html($('#infoSpan').attr('goodEmail'))
			$('#infoSpan').addClass('enabled');
		}
	}
});

$(document).ready(function() {
	var scrolledVal = $( window ).scrollTop();
	var windowHeight = $( window ).height();
	var threshold = 0.06;

	$('.pushmenu-push').clearQueue().transition({left:"0px"},200);
	$("#mobile-menu").clearQueue().transition({left:"-200px"},200);
	$('.menuIcon').removeClass('active');
	$('.menuIcon').removeClass('menuActive');

	if (scrolledVal > windowHeight*threshold){
			$(".fixed-menu span.logo-fixed").clearQueue().transition({width:"128px"},200);
			$(".featureList li img").clearQueue().transition({y:0, opacity:0.8},1500);
	} else {
		$(".fixed-menu span.logo-fixed:not(.groundPage)").clearQueue().transition({width:"0px"},200);
	}
	if (scrolledVal > $('.fold.contact .cell-1').offset().top - windowHeight*0.2) {
		$('.fold.contact ul.contactOptions > li').children('img').clearQueue().transition({scale:1},1000);
		$('.pulse').clearQueue().transition({ rotate: -45},2000);	
	}
	if (scrolledVal > $('.fold.contact .cell-1').offset().top - windowHeight*0.2) {
		$('.fold.contact ul.contactOptions > li').children('img').clearQueue().transition({scale:1},1000);
		$('.pulse').clearQueue().transition({ rotate: -45},2000);	
	}
	if (scrolledVal > $('.fold.contact .cell-3').offset().top - windowHeight*0.2) {
		$('.fold.contact .cell>img').each(function(i) {
			$(this).clearQueue().transition({scale:1, delay:(i) * 100},1000);
		});
	}
	setTimeout( function(){ 
		$('.addWhiteSpace:not(.enable)').css("height","360px");
 	}  , 2000 );
	setTimeout( function(){ 
		$('.addWhiteSpace.enable').css("height","auto");
 	}  , 2000 );
	adjustScreenFit();
	//adjustSecondSection();
});

$( window ).resize(function() {
		$('.addWhiteSpace:not(.enable)').css("height","360px");
	adjustScreenFit();
	//adjustSecondSection();
});


function adjustScreenFit(){
	
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	if (windowWidth < 700) {
		$(".mobile").addClass("enable");
			$(".fold.intro").height(windowHeight-100);
	} else {
		$(".mobile").removeClass("enable");
	}
}

function adjustScreenFit(){
	var windowWidth = $(window).width();
	if (windowWidth < 700) {
		$(".mobile").addClass("enable");
		if(windowWidth <400) {
			$(".fold.intro").height(580);
		} else {
			$(".fold.intro").height(380);
		}
	} else {
		$(".mobile").removeClass("enable");
	}
}
$('.fold.contact ul.contactOptions > li').children('img').clearQueue().transition({scale:0},0);

$('.fold.contact ul.contactOptions > li').hover(function(){
	$(this).children('.pulse').clearQueue().transition({ rotate: 135});
	$(this).children('.arrow-right').clearQueue().transition({ marginLeft: 10},200);
},function(){
	if (!$(this).hasClass('active')){
		$(this).children('.pulse:not(.active)').clearQueue().transition({ rotate: -45});
		$(this).children('.arrow-right').clearQueue().transition({ marginLeft: 5},200);
	}
})

$("#selectSports").click(function(){
	$('.sportList').show();
	$('.sportList').clearQueue().transition({ opacity: 1});
	$(this).children('.pulse').addClass('active');
	$(this).children('.pulse').clearQueue().transition({ rotate: 135});
})


$("#callExternal").click(function() {
	var isMobile = false; //initiate as false
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
		|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
	if (isMobile){
		location.href = 'tel:9742718766';
	}
});



//Operating contact form

$(document).on('click','.optionFlow li',
function(e){
	$("#finalMail").html($("#finalMail").text()+" <span class='addClass' openId='"+$(this).parent().attr("id")+"'>"+$(this).text()+"</span>");
	$(this).parent().transition({rotateX: '90deg',opacity:0});
	$(this).parent().delay(1000).hide(0);
});
$(document).on('click','.addClass',
function(e){
	$("#"+$(this).attr('openId')).show();
	$("#"+$(this).attr('openId')).transition({rotateX: '0deg',opacity:1});
	var removeSpan = false;
//	$(this).siblings().each()
});

$(document).on('click','.menuIcon',
function(e){
	if ($(this).hasClass('menuActive')){
		$('.pushmenu-push').clearQueue().transition({left:"0px"},200);
		$("#mobile-menu").clearQueue().transition({left:"-200px"},200);
		$('.menuIcon').removeClass('active');
		$('.menuIcon').removeClass('menuActive');	
	}
	else {
		$('.pushmenu-push').clearQueue().transition({left:"200px"},200);
		$("#mobile-menu").clearQueue().transition({left:"0px"},200);
		$('.menuIcon').addClass('active');
		$('.menuIcon').addClass('menuActive');
	}
});
$(document).on('click','.fold',
function(e) {
		$('.pushmenu-push').clearQueue().transition({left:"0px"},200);
		$("#mobile-menu").clearQueue().transition({left:"-200px"},200);
		$('.menuIcon').removeClass('active');
		$('.menuIcon').removeClass('menuActive');
});

$(".featureList li img").clearQueue().transition({y:60, opacity:0},0);
$('.fold.contact .cell > img').clearQueue().transition({scale:0});



$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash;
		$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top -49
		}, 400, 'swing', function () {
//				window.location.hash = target;
		});
	});
});

$(document).on("mouseover", ".categories .menuItem:not(.disabled)", function(e) {
	var sportsVal = $(this).children("div").attr("sportSearch");
	$('ul.categories').each(function(){
		$(this).children("li:not(.menuItem)").each(function() {
			var sportsString = $(this).children("div").attr("sports");
			if (sportsString.indexOf(sportsVal) > -1){
				$(this).clearQueue().transition({opacity:1})
			} else {
				$(this).clearQueue().transition({opacity:0.2})	
			}
		});
	});
});

$(document).on("mouseleave", ".categories .menuItem:not(.active):not(.disabled)", function(e) {
$('ul.categories').each(function(){
		$(this).children("li:not(.menuItem)").each(function() {
				$(this).clearQueue().transition({opacity:1})
		});
	});
});

$(document).on("click", ".categories .menuItem", function(e) {
	if($(this).hasClass('active')){
		$(this).removeClass('active');
		$(this).children("div").children("h1").children("span.underline").clearQueue().transition({width:'20px'},200);
		$('ul.categories').each(function(){
			$(this).children("li").each(function() {
					$(this).removeClass('disabled');
					$(this).clearQueue().transition({opacity:1})
			});
		});
	} else {
		var sportsVal = $(this).children("div").attr("sportSearch");
		$('ul.categories').each(function(){
			$(this).children("li").each(function() {
				if ($(this).hasClass('menuItem')){
					$(this).removeClass('active');
					$(this).children("div").children("h1").children("span.underline").clearQueue().transition({width:'20px'},200);
					$(this).addClass('disabled');
				} else 
				{
					var sportsString = $(this).children("div").attr("sports");
					if (sportsString.indexOf(sportsVal) > -1){
						$(this).clearQueue().transition({opacity:1});
						$(this).removeClass('disabled');
					} else {
						$(this).clearQueue().transition({opacity:0.2});
						$(this).addClass('disabled');
					}
				}
			});
		});
		$(this).children("div").children("h1").children("span.underline").clearQueue().transition({width:'40px'},200);
		$(this).removeClass('disabled');
		$(this).addClass('active');
	}
});


$(document).on('click',".registerButton:not(.cancel)",function(e){
	e.stopPropagation();
	var tournamentId = $(this).parent().parent().attr('tournamentId');
	var dataSize = $(this).parent().parent().attr('data-size');
	$(".sportList li").removeClass("active");
	$('.tournamentList > li:not(.tournamentForm)').each(function(i) {
		if ($(this).attr('tournamentId') != tournamentId){
			$(this).clearQueue().transition({scale: [1, 0], marginTop:"-41px"},0);
			$(this).css('z-index',"-2");
		}
	});
	$(this).parent().parent().addClass('active');
	$(this).addClass('hide');
	$(this).siblings('.registerButton.cancel').removeClass('hide');
	$(".tournamentForm").removeClass('hide');
	$(".tournamentPoster").attr("data-size",dataSize);
	$(".tournamentPoster").attr("tournamentId",tournamentId);
	$(".tournamentForm .tournamentPoster img").attr("src","images/"+tournamentId+"-thumbnail.jpg");
	$(".sportList li").addClass("disable");
	
});
$('ul.dropdown-area li:not(#populate-option)').clearQueue().transition({ height: '0px', opacity:0},0);
$('ul.dropdown-area').hover(function(){
	$(this).children('li:not(#populate-option)').clearQueue().transition({ height: '30px', opacity:1},300);
	$(this).css('z-index','1000000');
},function(){
	$(this).children('li:not(#populate-option)').clearQueue().transition({ height: '0px', opacity:0},100);
	$(this).css('z-index','0');
})
$(document).ready(function(){
	
	//initialize slider
	$("#range_44").ionRangeSlider({
		type: "double",
		grid: true,
		"min": 0,
		"max": 25,
		"min_interval":1,
		"from": 17,
		"from_percent": 68,
		"from_value": "5am",
		"to": 25,
		"to_percent": 100,
		"to_value": "12am",
		values: [
			"12am", "1am", "2am", "3am","4am", "5am", "6am", "7am","8am", "9am", "10am","11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm","6pm", "7pm", "8pm","9pm", "10pm", "11pm", "12am"
		],
		 onChange: function (data) {
			$('.selectedTime').text(data.from_value+' - '+data.to_value);
		},
		onFinish: function (data) {
			$('#rangeValues').attr('value', eval(data.from) +'-'+ eval(data.to))
			var rangeLength = eval(data.to - data.from);
			var htmlContent ='';
			var j = 1;
			if (rangeLength < 4){
				for (i=0;i<(rangeLength);i++){
					if (i==0){
						htmlContent = '<li value="'+j+'" class="active default">'+j+' hour</li>'
					} else {
						htmlContent = htmlContent + '<li value="'+eval(j - 0.5)+'">'+eval(j - 0.5)+' hour</li>' + '<li value="'+j+'">'+j+' hour</li>';
					}
					j = eval(j+1);
				}
				$('.dropdown-duration').html(htmlContent);
			}
		}
	});
	
	// Save slider instance to var
//	var slider = $range.data("ionRangeSlider");
	
	$('#resetTimer').click(function(){
		//console.log(1);
		//slider.reset();
	})
	
	var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
	var htmlContent = '';
	var classes = '';
	
	for (i=0;i<3;i++){
		var d = new Date();	
		d.setDate(d.getDate() + i);
		var month = d.getMonth();
		var day = d.getDate();
		var year = d.getFullYear();
		month = monthNames[d.getMonth()];
		var thisDay =(day<10 ? '0' : '') + day + ', '+ (month<10 ? '0' : '') + month;
		if (i==0){
			htmlContent = '<li value="'+ year+','+ d.getMonth() +','+ day + '" class="active default">'+thisDay+'</li>'
		} else {
			htmlContent = htmlContent + '<li value="'+ year+','+ d.getMonth() +','+ day + '">'+thisDay+'</li>'
		}
	}
	$('.dropdown-date').html(htmlContent);
});
$('ul.dropdown-area li:not(#populate-option)').click(function(){
	$('.dropdown-area').removeClass('invalid');
	if($(this).hasClass('selected')){
		if($(this).hasClass('exclusive')){
			return false;
		} else {
			$(this).removeClass('selected');
			var currentString = $("#populate-option").html();
			currentString = currentString.replace('<span>'+$(this).text()+'</span>', '');
			if (currentString.trim() == ""){
				$("#populate-option").html('Select area');
			} else {
				$("#populate-option").html(currentString);
			}
			
		}
	} else {
		if($(this).hasClass('exclusive')){
			$("#populate-option").html('<span>East Bangalore</span>');
			$('ul.dropdown-area li:not(#populate-option)').removeClass('selected');
		} else {
			if($("#populate-option").text() == 'East Bangalore' || $("#populate-option").text() == 'Select area'){
				$("#populate-option").html('<span>'+$(this).text()+'</span>');
				$('.exclusive').removeClass('selected');
			} else {
				$("#populate-option").html($("#populate-option").html()+'<span>'+$(this).text()+'</span>');
			}
		}
		$(this).addClass('selected');
	}
});

$('ul.dropdown-this').hover(function(){	
	$(this).children('li').clearQueue().transition({ height: '30px',opacity: 1},300);
	$(this).css('z-index','1000000');
},function(){
	$(this).children('li:not(.active)').clearQueue().transition({ height: '0px',opacity: 0},100);
	$(this).css('z-index','0');
})

$('ul.dropdown-this').focus(function(){
	$(this).keydown(function(e){
		if (e.keyCode == 38) { 
			e.stopImmediatePropagation();
		   var makeActive = $(this).children('li.fakeHover').prev();
		   if (makeActive.length > 0 && !makeActive.hasClass('always')) {
			   $(this).children('.fakeHover').removeClass('fakeHover');
			   $(makeActive).addClass('fakeHover');
		   }
		   $(this).children('li').clearQueue().transition({ height: '30px',opacity: 1},300);
		   return false;
		}
		if (e.keyCode == 40) { 
			e.stopImmediatePropagation();
			if($(this).children('li.fakeHover').length > 0 ){
		   		var makeActive = $(this).children('li.fakeHover').next();
			} else {
				var makeActive = $(this).children('li.active').next();
			}
		   if (makeActive.length > 0 && !makeActive.hasClass('always')) {
			   $(this).children('.fakeHover').removeClass('fakeHover');
			   $(makeActive).addClass('fakeHover');
		   }
		   $(this).children('li').clearQueue().transition({ height: '30px',opacity: 1},300);
		   return false;
		}
		if (e.keyCode == 13){
			e.stopImmediatePropagation();
			$(this).children('li.fakeHover').click();
			$(this).children('li.fakeHover').removeClass('fakeHover');
			$(this).children('li:not(.active)').clearQueue().transition({ height: '0px',opacity: 0},100);						
		}
	});	
	$(this).children('li').clearQueue().transition({ height: '30px',opacity: 1},300);
	$(this).css('z-index','1000000');
})
$('ul.dropdown-this').blur(function(){
	$(this).children('li:not(.active)').clearQueue().transition({ height: '0px',opacity: 0},100);
	$(this).css('z-index','0');
})
$('ul.dropdown-area').focus(function(){
	$(this).keydown(function(e){
		if (e.keyCode == 38) { 
		e.stopImmediatePropagation();
		   var makeActive = $(this).children('li.fakeHover').prev();
		   if (makeActive.length > 0 && !makeActive.hasClass('always')) {
			   $(this).children('.fakeHover').removeClass('fakeHover');
			   $(makeActive).addClass('fakeHover');
		   }
		   return false;
		}
		if (e.keyCode == 40) { 
		e.stopImmediatePropagation();
			if($(this).children('li.fakeHover').length > 0 ){
		   		var makeActive = $(this).children('li.fakeHover').next();
			} else {
				var makeActive = $(this).children('li.active').next();
			}
		   if (makeActive.length > 0 && !makeActive.hasClass('always')) {
			   $(this).children('.fakeHover').removeClass('fakeHover');
			   $(makeActive).addClass('fakeHover');
		   }
		   return false;
		}
		if (e.keyCode == 13){
			e.stopImmediatePropagation();
			$(this).children('li.fakeHover').click();
		}
	});
	$(this).children('li').clearQueue().transition({ height: '30px',opacity: 1},300);
	$(this).css('z-index','1000000');
});
$('ul.dropdown-area').blur(function(){
	$(this).children('li.fakeHover').removeClass('fakeHover');
	$(this).children('li:not(.active)').clearQueue().transition({ height: '0px',opacity: 0},100);
	$(this).css('z-index','0');
})

$('ul.dropdown-this').click(function(){
	$(this).removeClass('invalid');
	if ($('ul.dropdown-active li:not(.always):not(.active)').css('height') != '30px'){
		$(this).children('li').clearQueue().transition({ height: '30px',opacity: 1},300);
		$(this).css('z-index','1000000');
	} else {
		$(this).children('li:not(.active)').clearQueue().transition({ height: '0px',opacity: 0},100);
		$(this).css('z-index','0');
	}
})
$(document).on('click','ul.dropdown-active > li:not(.active):not(.always)',function(e){
	$('ul.dropdown-active li').removeClass('active');
	$(this).addClass('active');
	$(this).parent().children('li:not(.active)').clearQueue().transition({ height: '0px',opacity: 0},100);
	$(this).css('z-index','0');
});
$(document).on('click','ul.dropdown-courts > li:not(.active)',function(e){
	$('ul.dropdown-courts li').removeClass('active');
	$(this).addClass('active');
	$(this).parent().children('li:not(.active)').clearQueue().transition({ height: '0px',opacity: 0},100);
	$(this).css('z-index','0');
});
$(document).on('click','ul.dropdown-date > li:not(.active)',function(e){
	$('ul.dropdown-date li').removeClass('active');
	$(this).addClass('active');
	$(this).parent().children('li:not(.active)').clearQueue().transition({ height: '0px',opacity: 0},100);
	$(this).css('z-index','0');
});
$(document).on('click','ul.dropdown-duration > li:not(.active)',function(e){
	$('ul.dropdown-duration li').removeClass('active');
	$(this).addClass('active');
	$(this).parent().children('li:not(.active)').clearQueue().transition({ height: '0px',opacity: 0},100);
	$(this).css('z-index','0');
});

$(document).on('focus',".registrationForm input",function(e){
	$(this).removeClass('invalid');
	if ($(this).val() == $(this).attr('default-text')){
		$(this).val('');
		$(this).addClass('active');
	}
}).on('blur','.registrationForm input',function(e) {
	if ($(this).val() == '' || $(this).val() == null ){
		$(this).val($(this).attr('default-text'));
		$(this).removeClass('active');
		$(this).removeClass('valid');
		$(this).removeClass('invalid');
	} else {
		if($(this).hasClass('emailId')){
			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if(!regex.test($(this).val())){
				$(this).addClass('invalid');
			}
		} else if ($(this).hasClass('phoneNumber')){
			var intRegex = /[0-9 -()+]+$/;
			if((!intRegex.test($(this).val())) || ($(this).val().length != 10)){
				$(this).addClass('invalid');
			}
		} else {
				
		}
	}
});
$(".phoneNumber").keydown(function (e) {
	// Allow: backspace, delete, tab, escape, enter and .
	if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
		 // Allow: Ctrl+A, Command+A
		(e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) || 
		 // Allow: home, end, left, right, down, up
		(e.keyCode >= 35 && e.keyCode <= 40)) {
			 // let it happen, don't do anything
			 return;
	}
	// Ensure that it is a number and stop the keypress
	if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
		e.preventDefault();
	}
});
$('input.emailId, input.emailId-touch').bind("change keyup paste mousenter",function(){
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(regex.test($(this).val())){
			$(this).removeClass("invalid");
			$(this).addClass('valid');
		}
});
$(document).on('focus',".email-right input",function(e){
	$(this).removeClass('invalid');
	$(this).addClass('active');
}).on('blur','.email-right input',function(e) {
	if ($(this).val() == '' || $(this).val() == null ){
		$(this).removeClass('active');
		$(this).removeClass('valid');
		$(this).removeClass('invalid');
	} else {
		if($(this).hasClass('emailId-touch')){
			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if(!regex.test($(this).val())){
				$(this).addClass('invalid');
			}
		}
	}
});
$('input.phoneNumber').bind("change keyup paste mousenter",function(){
		var intRegex = /[0-9 -()+]+$/;
		if((intRegex.test($(this).val())) && ($(this).val().length == 10)){
			$(this).removeClass("invalid");
			$(this).addClass('valid');
		}
});
$(document).on('click','#subscribeSubmit:not(.disable)',function(e){
	var isEverythingFine = true;
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(!regex.test($("input.emailId-touch").val())){
		$("input.emailId-touch").addClass('invalid');
		isEverythingFine = false;
	} else {
		$("input.emailId-touch").removeClass('invalid');
	}
	if(($("input.name-touch").val().length < 2)){
		$("input.name-touch").addClass('invalid');
		isEverythingFine = false;
	} else {
		$("input.name-touch").removeClass('invalid');
	}
	if(isEverythingFine){
		$('#subscribeSubmit').text('Registering');
		$('#subscribeSubmit').addClass('disable');
		$('.email-right input').addClass('disable');
		$('.email-right input').attr('disabled','');
		var requestObject = {
            name: $("input.name-touch").val(),
            email: $("input.emailId-touch").val()
        };
		$.ajax({
            url: "userRequest.do?action=addInfo",
            type: 'POST',
            data: requestObject,
            headers : {
                "Content-Type" : "application/x-www-form-urlencoded"
            },
            success: function (response) {
				$('#subscribeSubmit').text('Thank you!');
            },
            error: function () {
				$('#subscribeSubmit').text('Error. Try again');
				$('#subscribeSubmit').removeClass('disable');
				$('.email-right input').removeAttr('disabled');
			}
        });
	}
});
$(document).on('click','#tournamentRegist:not(.sending):not(.success)',function(e){
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var intRegex = /[0-9 -()+]+$/;
	var errorMsg = "<ol>";
	var isEverythingFine = true;
	if(($("input.teamName").val().length < 2) || ($("input.teamName").val() == $("input.teamName").attr('default-text'))){
		$("input.teamName").addClass('invalid');
		errorMsg = errorMsg + "<li>Please enter a longer name.</li>"
		isEverythingFine = false;
	} else {
		$("input.teamName").removeClass('invalid');
	}
	if((!intRegex.test($("input.phoneNumber").val())) || ($("input.phoneNumber").val().length != 10)){
		$("input.phoneNumber").addClass('invalid');
		errorMsg = errorMsg + "<li>Please enter valid mobile number.</li>"
		isEverythingFine = false;
	} else {
		$("input.phoneNumber").removeClass('invalid');
	}
	if(!regex.test($("input.emailId").val())){
		$("input.emailId").addClass('invalid');
		errorMsg = errorMsg + "<li>Please enter valid email address.</li>"
		isEverythingFine = false;
	} else {
		$("input.emailId").removeClass('invalid');
	}
	if($('#populate-option').text() == 'Select area'){
		$('.dropdown-area').addClass('invalid');
		errorMsg = errorMsg + "<li>Please choose an area.</li>"
		isEverythingFine = false;
	} else {
		var areas = "";
		$('.dropdown-area li:not(.always)').each(function(i) {
			if($(this).hasClass('selected')){
				if (areas == ""){
					areas = $(this).attr('value');
				} else {
					areas = areas+','+$(this).attr('value');
				}
			}
		});
		$('.dropdown-area').removeClass('invalid');
	}
	if($('.dropdown-active .active').attr('value') == 'default'){
		$('.dropdown-active').addClass('invalid');
		errorMsg = errorMsg + "<li>Please choose a sport.</li>"
		isEverythingFine = false;
	} else {
		$('.dropdown-active').removeClass('invalid');
	}

	if(isEverythingFine){
        var year = parseInt($(".dropdown-date li.active").attr("value").split(",")[0]);
        var month = parseInt($(".dropdown-date li.active").attr("value").split(",")[1]);
        var day = parseInt($(".dropdown-date li.active").attr("value").split(",")[2]);
        var requestObject = {
            name: $("input.teamName").val(),
            phone: $("input.phoneNumber").val(),
            email: $("input.emailId").val(),
            sport: $(".dropdown-active li.active").attr("value"),
            play_time_start: new Date(year, month, day, parseInt($("#rangeValues").val().split("-")[0])).getTime(),
            play_time_end: new Date(year, month, day, parseInt($("#rangeValues").val().split("-")[1])).getTime(),
            duration: $(".dropdown-duration li.active").attr("value"),
            channel: "Web",
            area: areas,
            no_of_courts: $(".dropdown-courts li.active").attr("value")
        };
        // $.post("https://54.169.157.178:8443/sportinize/userRequest.do?action=add", requestObject, function(response) {
        //     console.log(response);
        // });
        //console.log(requestObject);
		$('.submitButton').addClass('sending');
		$('.sendStatuscover').removeClass('hide');
		$('.submitButton').text('Sending Request');

        $.ajax({
            url: "userRequest.do?action=add",
            type: 'POST',
            data: requestObject,
            headers : {
                "Content-Type" : "application/x-www-form-urlencoded"
            },
            success: function (response) {
				$('.submitButton').removeClass('sending');
				$('.submitButton').addClass('success');
				$('.submitButton').text(' ');
				$('.successMsg').addClass('success');
            },
            error: function () {
				$('.submitButton').removeClass('sending');
				$('.sendStatuscover').addClass('hide');
				$('.submitButton').text('Send again');
				$(".errorMsg").html("<ol><li style='color:#cd2733'>Message sending failed. Try sending us again.</li></ol>");
			},
        });
		
	} else {
		
		$(".errorMsg").html(errorMsg+"</ol>");
	}
});
$(document).on('click',".registerButton.cancel",function(e){
	e.stopPropagation();
	$('.errorMsg').html('');
	$(".registrationForm input").removeClass('invalid');
	$(".sportList li").removeClass("active");
	$('.tournamentList > li').each(function(i) {
			$(this).clearQueue().transition({scale: [1, 1], marginTop:"0px"},100);
			$(this).css('z-index',"0");
	});
	$(this).addClass('hide');
	$(this).parent().parent().removeClass('active');
	$(this).siblings('.registerButton').removeClass('hide');
	$(".tournamentForm").addClass('hide');
	$(".sportList li").removeClass("disable");
});


$(document).on('click',".sportList li:not(.disable)",function(e){
	if($(this).hasClass('active')){
		var selectedSports = $(this).attr("sport");
		$('.tournamentList > li').each(function(i) {
			$(this).clearQueue().transition({scale: [1, 1], marginTop:"0px" , delay:(i) * 50},300);
			$(this).css('z-index',"0");
		});
		$(this).removeClass("active");
	} else {
		var selectedSports = $(this).attr("sport");
		$(".sportList li").removeClass("active");
		$('.tournamentList > li:not(.tournamentForm)').each(function(i) {
			if ($(this).hasClass(selectedSports)){
				$(this).clearQueue().transition({scale: [1, 1], marginTop:"0px"},300);
				$(this).css('z-index',"0");
			} else {
				$(this).clearQueue().transition({scale: [1, 0], marginTop:"-41px" , delay:(i) * 50},300);
				$(this).css('z-index',"-2");
			}
		});
		$(this).addClass("active");
	}
});

$(document).on('click',".tournamentPoster",function(e){
	var pswpElement = document.querySelectorAll('.pswp')[0];
	var currentItem = $(this).attr("tournamentId");
	// build items array
	var items = [];
	var insideItmes = [];
	var startPoint = 0;
	var size = "";
	size =  $(this).attr('data-size').split('x');
	insideItmes = {
		src: 'images/'+$(this).attr("tournamentId")+'.jpg',
		w: parseInt(size[0], 10),
		h: parseInt(size[1], 10)
	};
	items.push(insideItmes);
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

$(document).on('click',".tournamentList>li:not(.tournamentForm)",function(e){
	var sporType = $(this).attr("class");
	var pswpElement = document.querySelectorAll('.pswp')[0];
	var currentItem = $(this).attr("tournamentId");
	// build items array
	var items = [];
	var insideItmes = [];
	var startPoint = 0;
	var size = "";
	$('.tournamentList li.'+sporType).each(function(i) {
			insideItmes = [];
			size = "";
			if ($(this).attr("tournamentId") == currentItem){
				startPoint = i;
			}
			size =  $(this).attr('data-size').split('x');
			insideItmes = {
				src: 'images/'+$(this).attr("tournamentId")+'.jpg',
				title: $(this).children(".tournDetails").children("h1").text()+", "+$(this).children(".tournDetails").children(".tournDetailList").children("li:first-child").text(),
				w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
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

// Cache selectors
var topMenu = $(".fixed-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

/*
var isValueFromTop = false;
var scrollValTopStart = 0;
var scrollValTopEnd = 0;
var step = 0;
var isMobileScreen = false;
// Bind to scroll

function adjustSecondSection(){
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	if (windowWidth < 700) {
		isMobileScreen = true;
		var scrollDivHeight = $('.howitworks-wrapper').outerHeight();
		$('.howitworks-wrapper').addClass('pre-scroll');
		$('.featureList-wrapper').css('height',eval(scrollDivHeight*0.3+120));
		$('#howItWorks').css('height',eval(scrollDivHeight*1.3 +200));
		$('.howitworks-wrapper').css('height',eval(scrollDivHeight));
	} else {
		var scrollDivHeight = $('.howitworks-wrapper').outerHeight();
		$('.howitworks-wrapper').addClass('pre-scroll');
		$('.featureList-wrapper').css('height',eval(scrollDivHeight+120));
		$('#howItWorks').css('height',eval(scrollDivHeight*2 +150));
		$('.howitworks-wrapper').css('height',eval(scrollDivHeight));
	}
}
*/

$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight+100;
  // scrollValTop = $('#howItWorks').offset().top;
   //var scrollDivHeight = $('.featureList-wrapper').outerHeight();
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
   if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
/*
	if (id == 'howItWorks' && !isValueFromTop){
//		scrollValTop = $(window).scrollTop();
		isValueFromTop = true;
//		scrollValTop = $('#howItWorks').offset().top;
		scrollValTopStart = eval($(".howitworks-wrapper").offset().top - 90);
		scrollValTopEnd = eval($(".howitworks-wrapper").offset().top + $('.featureList-wrapper').outerHeight() - 90);
		step = 3/eval(scrollValTopEnd-scrollValTopStart);
	}
	if (scrollValTopStart < $(window).scrollTop() && $(window).scrollTop() < scrollValTopEnd && isValueFromTop){	
		$('.howitworks-wrapper').addClass('fixed');
		$('.howitworks-wrapper').removeClass('pre-scroll');
		var filterVal = 3 - 2*step*($(window).scrollTop()-scrollValTopStart);
		if (filterVal < 0){
			filterVal = 0;
		}
		$('.cell').css({
                            'filter': 'blur('+filterVal+'px)',
                            '-webkit-filter': 'blur('+filterVal+'px)',
                            '-moz-filter': 'blur('+filterVal+'px)',
                            '-o-filter': 'blur('+filterVal+'px)',
                            '-ms-filter': 'blur('+filterVal+'px)'
                        });
	} else if ($(window).scrollTop() > scrollValTopEnd && isValueFromTop){
		$('.howitworks-wrapper').removeClass('fixed');
		$('.howitworks-wrapper').removeClass('pre-scroll');
		$('.cell').css({
					'filter': 'blur(0px)',
					'-webkit-filter': 'blur(0px)',
					'-moz-filter': 'blur(0px)',
					'-o-filter': 'blur(0px)',
					'-ms-filter': 'blur(0px)'
				});
	} else if ($(window).scrollTop() < scrollValTopStart && isValueFromTop){
		$('.howitworks-wrapper').removeClass('fixed');
		$('.howitworks-wrapper').addClass('pre-scroll');
		$('.cell').css({
					'filter': 'blur(3px)',
					'-webkit-filter': 'blur(3px)',
					'-moz-filter': 'blur(3px)',
					'-o-filter': 'blur(3px)',
					'-ms-filter': 'blur(3px)'
				});
	}
	*/
       // Set/remove active class
       menuItems
         .children().removeClass("active")
         .end().filter("[href=#"+id+"]").children().addClass("active");
});

$( window ).scroll(function() {
	var scrolledVal = $( window ).scrollTop();
	var windowHeight = $( window ).height();
	var threshold = 0.06;

	$('.pushmenu-push').clearQueue().transition({left:"0px"},200);
	$("#mobile-menu").clearQueue().transition({left:"-200px"},200);
	$('.menuIcon').removeClass('active');
	$('.menuIcon').removeClass('menuActive');

	if (scrolledVal > windowHeight*threshold){
			$(".fixed-menu a.logo-fixed").clearQueue().transition({width:"128px"},200);
			$(".featureList li img").clearQueue().transition({y:0, opacity:0.8},1500);
	} else {
		$(".fixed-menu a.logo-fixed:not(.groundPage)").clearQueue().transition({width:"0px"},200);
	}
	if (scrolledVal > $('.fold.contact .cell-1').offset().top - windowHeight*0.2) {
		$('.fold.contact ul.contactOptions > li').children('img').clearQueue().transition({scale:1},1000);
		$('.pulse').clearQueue().transition({ rotate: -45},2000);	
	}
	if (scrolledVal > $('.fold.contact .cell-1').offset().top - windowHeight*0.2) {
		$('.fold.contact ul.contactOptions > li').children('img').clearQueue().transition({scale:1},1000);
		$('.pulse').clearQueue().transition({ rotate: -45},2000);	
	}
	if (scrolledVal > $('.fold.contact .cell-3').offset().top - windowHeight*0.2) {
		$('.fold.contact .cell>img').each(function(i) {
			$(this).clearQueue().transition({scale:1, delay:(i) * 100},1000);
		});
	}
	
});




function scrollToTop(){
	$('html, body').stop().animate({
			'scrollTop': 0
		}, 400, 'swing', function () {
//				window.location.hash = target;
		});
}

$('#whatsappClick').click(function(){
	if ($(this).hasClass('enable')){
		$('html, body').animate({
			scrollTop: $("#whatsappClick").offset().top + 50
		}, 500);
	}
});
$("#emailForm").click(function() {
    $('html, body').animate({
        scrollTop: $("#requestForm").offset().top - 50
    }, 500);
});
$(document).on("click",".contactOptions li:not('#callExternal'):not('#emailForm'):not('#facebookClick')",function(e){
	var attr = $(this).attr('openTab');
	$('.contactOptions li').removeClass('active');
	$(this).addClass('active');
	$(this).children('.pulse').clearQueue().transition({ rotate: 135});
	$(this).children('.arrow-right').clearQueue().transition({ marginLeft: 10},200);
	if (typeof attr !== typeof undefined && attr !== false) {
   		$(".cell.cell-2").hide();
   		$(".cell.cell-3").hide();
		$(".cell.biggerCell").addClass("hide");
		$("#"+attr).removeClass("hide");
		$(this).addClass("active");
	}
});

$(document).on("click",".closeButton, .contactOptions li.active",function(e){
	$('.contactOptions li').removeClass('active');
	$('.contactOptions li').children('.pulse:not(.active)').clearQueue().transition({ rotate: -45});
	$('.contactOptions li').children('.arrow-right').clearQueue().transition({ marginLeft: 5},200);
	$(".cell.cell-2").show();
   	$(".cell.cell-3").show();
	$(".cell.biggerCell").addClass("hide");
});
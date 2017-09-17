
var app = angular.module('courtsideBeta', []);

app.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.defaults.transformRequest = function(data)
    {
        if (data === undefined)
            return data;
        return $.param(data);
    };

    $httpProvider.defaults.headers.post['Content-Type'] =
        'application/x-www-form-urlencoded; charset=UTF-8';
    }]);

// window.onload = function() {
//     var hash = window.location.hash;
//     hash = hash.split("/");
//     $.ajax({
//         url: "http://172.16.90.230:8443/sportinize/ground.do?action=info&id=" + hash[1],
//         type: 'GET',
//         headers : {
//             "Content-Type" : "application/x-www-form-urlencoded"
//         },
//         success: function (response) {
//         },
//         error: function () {}
//     });
// };

var parentGroundIDs = {};
window.onload = $.ajax({
    url: "ground.do?action=list",
    type: 'GET',
    headers : {
        "Content-Type" : "application/x-www-form-urlencoded"
    },
    success: function (response) {
        if((typeof response) === 'string')
            response = JSON.parse(response);
        var groundData = response.data;
        for (var i = 0; i < groundData.length; i++) {
            if (groundData[i].name === "Dream Sports") {
                parentGroundIDs.dreamSports = groundData[i].id;
            }
            else if (groundData[i].name === "Powerplay I") {
                parentGroundIDs.powerplay = groundData[i].id;
            }
            //else if (groundData[i].name === "Powerplay II") {
            //    parentGroundIDs.dreamSports = groundData[i].id;
            //}
            else if (groundData[i].name === "Play Mania") {
                parentGroundIDs.playmania = groundData[i].id;
            }
            else if (groundData[i].name === "True Bounce") {
                parentGroundIDs.truebounce = groundData[i].id;
            }
            else if (groundData[i].name === "Pretty Sports") {
                parentGroundIDs.prettysports = groundData[i].id;
            }
            else if (groundData[i].name === "Gurukul I") {
                parentGroundIDs.gurukulI = groundData[i].id;
            }
            //else if (groundData[i].name === "Gurukul II") {
            //    parentGroundIDs.dreamSports = groundData[i].id;
            //}
            else if (groundData[i].name === "Playstation") {
                parentGroundIDs.playstation = groundData[i].id;
            }
            else if (groundData[i].name === "Decathlon") {
                parentGroundIDs.decathlon = groundData[i].id;
            }
            else if (groundData[i].name === "TAMS") {
                parentGroundIDs.tams = groundData[i].id;
            }
            else if (groundData[i].name === "NOAH Tennis") {
                parentGroundIDs.noahtennis = groundData[i].id;
            }
            else if (groundData[i].name === "SPT Sports") {
                parentGroundIDs.sptsports = groundData[i].id;
            }
        }
    },
    error: function () {}
});

$('.GurukulI').click(function() {
    var groundID = parentGroundIDs.gurukulI;
    location.href = 'ground.do?action=profile#!/' + groundID;
});
$('.Dreamsports').click(function() {
    var groundID = parentGroundIDs.dreamSports;
    location.href = 'ground.do?action=profile#!/' + groundID;
});
$('.Powerplay').click(function() {
    var groundID = parentGroundIDs.powerplay;
    location.href = 'ground.do?action=profile#!/' + groundID;
});
$('.Playmania').click(function() {
    var groundID = parentGroundIDs.playmania;
    location.href = 'ground.do?action=profile#!/' + groundID;
});
$('.Truebounce').click(function() {
    var groundID = parentGroundIDs.truebounce;
    location.href = 'ground.do?action=profile#!/' + groundID;
});
$('.Prettysports').click(function() {
    var groundID = parentGroundIDs.prettysports;
    location.href = 'ground.do?action=profile#!/' + groundID;
});
$('.Playstation').click(function() {
    var groundID = parentGroundIDs.playstation;
    location.href = 'ground.do?action=profile#!/' + groundID;
});
$('.Decathlon').click(function() {
    var groundID = parentGroundIDs.decathlon;
    location.href = 'ground.do?action=profile#!/' + groundID;
});
$('.Tams').click(function() {
    var groundID = parentGroundIDs.tams;
    location.href = 'ground.do?action=profile#!/' + groundID;
});
$('.Noahtennis').click(function() {
    var groundID = parentGroundIDs.noahtennis;
    location.href = 'ground.do?action=profile#!/' + groundID;
});
$('.Sptsports').click(function() {
    var groundID = parentGroundIDs.sptsports;
    location.href = 'ground.do?action=profile#!/' + groundID;
});

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
    var imageUrl = "/images/" + id + "/cover.jpg"
    $('.ground.cover').css('background-image','url("' + imageUrl + '")'); 



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

app.controller('GroundProfileController', ['$scope', '$http', function($scope, xhr) {
    var hash = window.location.hash;
    var host = window.location.host;
    hash = hash.split("/");
    var url= "ground.do?action=info&id=" + hash[1];
    //var url= "http://192.168.1.9:8443/sportinize/ground.do?action=info&id=53f38e0c937d4730b16324a47a71cc9c";

    xhr.get(url).success(function(response, status, headers, config) {
      $scope.ground = response.data;
      xyz();
    }).error(function(response, status, headers, config) {});

    // var response = {};
    //
    // response.data = {
    //     "id":"d9bf7a911e9e4f76bbcd112fcc834dea",
    //     "name":"True Bounce",
    //     "address": "420, Paper St. Wilmington, DE 19886",
    //     "area":"Marathahalli",
    //     "sports":["Tennis", "Football"],
    //     "amenities":"Parking, Water, Washroom, Refresh Bar, Lockers, Training Bib, Stands",
    //     "latlong": "12.953024, 77.721154",
    //     "grounds":{
    //         "Tennis":[
    //             {
    //                 "id":"30352878af244bc78373698f81ef8061",
    //                 "parent_id":"d9bf7a911e9e4f76bbcd112fcc834dea",
    //                 "coaching":"Yes",
    //                 "surface":"Clay",
    //                 "size":"Standard",
    //                 "pricing":{
    //                     "sunday":[
    //                         {
    //                             "start":6,
    //                             "end":10.5,
    //                             "rate":250
    //                         },
    //                         {
    //                             "start":16,
    //                             "end":19,
    //                             "rate":250
    //                         }
    //                     ],
    //                     "wednesday":[
    //                         {
    //                             "start":6,
    //                             "end":10.5,
    //                             "rate":250
    //                         },
    //                         {
    //                             "start":16,
    //                             "end":19,
    //                             "rate":250
    //                         }
    //                     ],
    //                     "default":[
    //                         {
    //                             "start":6,
    //                             "end":10.5,
    //                             "rate":250
    //                         },
    //                         {
    //                             "start":16,
    //                             "end":19,
    //                             "rate":200
    //                         },
    //                         {
    //                             "start":20,
    //                             "end":24,
    //                             "rate":250
    //                         }
    //                     ],
    //                     "coaching":[
    //                         {
    //                             "start":6,
    //                             "end":10.5,
    //                             "rate":700
    //                         },
    //                         {
    //                             "start":16,
    //                             "end":19,
    //                             "rate":700
    //                         }
    //                     ]
    //                 }
    //             }
    //         ],
    //         "Football":[
    //             {
    //                 "id":"30352878af244bc78373698f81ef8061",
    //                 "parent_id":"d9bf7a911e9e4f76bbcd112fcc834dea",
    //                 "coaching":"Yes",
    //                 "surface":"Clay",
    //                 "size":"Standard",
    //                 "pricing":{
    //                     "default":[
    //                         {
    //                             "start":6,
    //                             "end":10.5,
    //                             "rate":250
    //                         },
    //                         {
    //                             "start":16,
    //                             "end":19,
    //                             "rate":250
    //                         }
    //                     ],
    //                     "coaching":[
    //                         {
    //                             "start":6,
    //                             "end":10.5,
    //                             "rate":700
    //                         },
    //                         {
    //                             "start":16,
    //                             "end":19,
    //                             "rate":700
    //                         }
    //                     ]
    //                 }
    //             }
    //         ]
    //     }
    // };
    // $scope.ground = response.data;

    var MAX_IMAGES = 3;

    var xyz = function () {
        if ($scope.ground.amenities != null) {
            $scope.ground.amenities = $scope.ground.amenities.split(", ");
        }


        $scope.selectedSport = $scope.ground.sports[0];
        $scope.selectedSportIndex = 0;
        $scope.turfs = $scope.ground.grounds[$scope.selectedSport];
        $scope.selectedTurf = $scope.ground.grounds[$scope.selectedSport][0];

        $scope.processImages = function() {
          var temp = $scope.selectedTurf.no_of_images;
          if(temp > MAX_IMAGES)
          {
            $scope.selectedTurf.hasMoreImages = true;
            $scope.selectedTurf.seeMoreImage = MAX_IMAGES + 1;
            $scope.selectedTurf.extraImages = [];
            for(var i=MAX_IMAGES + 2; i<=temp; i++)
              $scope.selectedTurf.extraImages.push(i);
            temp = MAX_IMAGES;
          }
          $scope.selectedTurf.images = [];
          for(var i=1; i<=temp; i++)
            $scope.selectedTurf.images.push(i);
        };
        $scope.processImages();

        $scope.changeSport = function(index) {
            $scope.selectedSport = $scope.ground.sports[index];
            $scope.selectedSportIndex = index;
            $scope.selectedTurf = $scope.ground.grounds[$scope.selectedSport][0];
            $scope.calculateRatesAndTimings();
            $scope.processImages();
        };

        $scope.changeTurf = function(index) {
            $scope.selectedTurf = $scope.ground.grounds[$scope.selectedSport][index];
            $scope.calculateRatesAndTimings();
            $scope.processImages();
        };

        $scope.startTiming = function(startTime) {
            var rateStartTime = "";
            if (startTime < 1) {
                startTime = startTime + 12;
                if (startTime === parseInt(startTime)) {
                    rateStartTime = startTime + " " + "AM";
                }
                else {
                    rateStartTime = parseInt(startTime) + ":" + "30" + " " + "AM";
                }
            }
            else if (startTime < 12 && startTime >= 1) {
                if (startTime === parseInt(startTime)) {
                    rateStartTime = startTime + " " + "AM";
                }
                else {
                    rateStartTime = parseInt(startTime) + ":" + "30" + " " + "AM";
                }
            }
            else if (startTime == 12) {
                rateStartTime = startTime + " " + "PM";
            }
            else {
                startTime = startTime - 12;
                if (startTime === parseInt(startTime)) {
                    rateStartTime = startTime + " " + "PM";
                }
                else {
                    rateStartTime = parseInt(startTime) + ":" + "30" + " " + "PM";
                }
            }
            return rateStartTime;
        };

        $scope.endTiming = function(endTime) {
            var rateEndTime = "";
            if (endTime < 12) {
                if (endTime === parseInt(endTime)) {
                    rateEndTime = endTime + " " + "AM";
                }
                else {
                    rateEndTime = parseInt(endTime) + ":" + "30" + " " + "AM";
                }
            }
            else if (endTime == 12) {
                rateEndTime = endTime + " " + "PM";
            }
            else if (endTime === 24) {
                endTime = endTime - 12;
                rateEndTime = endTime + " " + "AM";
            }
            else {
                endTime = endTime - 12;
                if (endTime === parseInt(endTime)) {
                    rateEndTime = endTime + " " + "PM";
                }
                else {
                    rateEndTime = parseInt(endTime) + ":" + "30" + " " + "PM";
                }
            }
            return rateEndTime;
        };

        $scope.calculateRatesAndTimings = function() {
          if($scope.selectedTurf.pricing == null) return;
          var week = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
          var weekShorts = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
          var weekday = "";
          var weekend = "";
          var defaultDay = "";
          $scope.timingsAndRates = [];
          var text = "";
          var weekdayIndex = 0;
          var consecutiveCount = 0;
          var isContinuous = true;
          var defaultConsecutiveCount = 0;
          var defaultIsContinuous = true;
          var weekendIndex = 0;
          var defaultIndex = 0;
          for (var i = 0; i < week.length; i++) {
              if ($scope.selectedTurf.pricing[week[i]]) {
                  if ($scope.selectedTurf.pricing[week[i]].length != 0) {
                      $scope.timingsAndRates.push({
                          name: "Individual Day",
                          day: weekShorts[i],
                          rates: $scope.selectedTurf.pricing[week[i]]
                      });
                  }
                  else {
                      $scope.timingsAndRates({
                          name: "Individual Day",
                          day: weekShorts[i],
                          rates: "Closed"
                      });
                  }
              }
              else if ($scope.selectedTurf.pricing["weekday"] && (week[i] != "saturday" && week[i] != "sunday")) {
                  if (weekday === "") {
                      weekdayIndex = $scope.timingsAndRates.length;
                      consecutiveCount = i;
                      $scope.timingsAndRates.push({
                          name: "Weekday",
                          day: text += weekShorts[i] + "," + " ",
                          rates: $scope.selectedTurf.pricing["weekday"]
                      });
                      weekday += week[i];
                  }
                  else {
                      if(consecutiveCount == (i-1)){
                          consecutiveCount++;
                      } else {
                          isContinuous = false;
                      }
                      $scope.timingsAndRates[weekdayIndex].day += weekShorts[i] + "," + " ";
                  }
              }
              else if ($scope.selectedTurf.pricing["weekend"] && (week[i] === "saturday" || week[i] === "sunday")) {
                  if (weekend === "") {
                      weekendIndex = $scope.timingsAndRates.length;
                      $scope.timingsAndRates.push({
                          name: "Weekend",
                          day: weekShorts[i] + "," + " ",
                          rates: $scope.selectedTurf.pricing["weekend"]
                      });
                      weekend += week[i];
                  }
                  else {
                      $scope.timingsAndRates[weekendIndex].day += weekShorts[i] + "," + " ";
                  }
              }
              else {
                  if (defaultDay === "") {
                      defaultIndex = $scope.timingsAndRates.length;
                      defaultConsecutiveCount = i;
                      $scope.timingsAndRates.push({
                          name: "Default",
                          day: weekShorts[i] + "," + " ",
                          rates: $scope.selectedTurf.pricing["default"]
                      });
                      defaultDay += week[i];
                  }
                  else {
                      if(defaultConsecutiveCount == (i-1)){
                          defaultConsecutiveCount++;
                      } else {
                          defaultIsContinuous = false;
                      }
                      $scope.timingsAndRates[defaultIndex].day += weekShorts[i] + "," + " ";
                  }
              }
          }
          if ($scope.selectedTurf.pricing["weekday"]) {
              var splitWeekday = $scope.timingsAndRates[weekdayIndex].day.split(', ');
              if (isContinuous && splitWeekday.length > 3) {
                  $scope.timingsAndRates[weekdayIndex].day = splitWeekday[0]+' to '+splitWeekday[splitWeekday.length - 2];
              }
              else {
                  $scope.timingsAndRates[weekdayIndex].day = $scope.timingsAndRates[weekdayIndex].day.slice(0, -2);
              }
          }
          if ($scope.selectedTurf.pricing["weekend"]) {
              $scope.timingsAndRates[weekendIndex].day = $scope.timingsAndRates[weekendIndex].day.slice(0, -2);
          }
          if ($scope.selectedTurf.pricing["default"]) {
              var splitDefaultDay = $scope.timingsAndRates[defaultIndex].day.split(', ');
              if (defaultIsContinuous && splitDefaultDay.length > 3) {
                  $scope.timingsAndRates[defaultIndex].day = splitDefaultDay[0]+' to '+splitDefaultDay[splitDefaultDay.length - 2];
              }
              else {
                  $scope.timingsAndRates[defaultIndex].day = $scope.timingsAndRates[defaultIndex].day.slice(0, -2);
              }
          }


          for (i = 0; i < $scope.timingsAndRates.length; i++) {
              var finalRates = [];
              for (var j = 0; j < $scope.timingsAndRates[i].rates.length; j++) {
                  var pushToArray = true;
                  if (finalRates.length == 0) {
                      finalRates.push({
                          timing: $scope.startTiming($scope.timingsAndRates[i].rates[j].start) + " " + "-" + " " + $scope.endTiming($scope.timingsAndRates[i].rates[j].end),
                          rate: ($scope.timingsAndRates[i].rates[j].rate < 0 ? 'Closed' : $scope.timingsAndRates[i].rates[j].rate)
                      });
                  }
                  else {
                      for (var k = 0; k < finalRates.length; k++) {
                          if ($scope.timingsAndRates[i].rates[j].rate == finalRates[k].rate) {
                              finalRates[k].timing += " " + "&" + " " + $scope.startTiming($scope.timingsAndRates[i].rates[j].start) + " " + "-" + " " + $scope.endTiming($scope.timingsAndRates[i].rates[j].end);
                              pushToArray = false;
                              break;
                          }
                      }
                      if (pushToArray) {
                          finalRates.push({
                              timing: $scope.startTiming($scope.timingsAndRates[i].rates[j].start) + " " + "-" + " " + $scope.endTiming($scope.timingsAndRates[i].rates[j].end),
                              rate: ($scope.timingsAndRates[i].rates[j].rate < 0 ? 'Closed' : $scope.timingsAndRates[i].rates[j].rate)
                          });
                      }
                  }
              }
              $scope.timingsAndRates[i].finalRates = finalRates;
          }
        };
        $scope.calculateRatesAndTimings();

        var mapProp;
        var map;
        var marker;
        var contentString;
        var infoWindow;
        var style = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#727272"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];
        var initialize = function (latlong) {
            mapProp = {
                center: new google.maps.LatLng(parseFloat(latlong[0]),parseFloat(latlong[1])),
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                zoomControl: true,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL,
                    position: google.maps.ControlPosition.RIGHT_BOTTOM
                },
                scrollwheel: false,
                panControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                styles: style
            };
            map = new google.maps.Map(document.getElementById("map-canvas"), mapProp);
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(latlong[0],latlong[1]),
                map: map,
                animation: google.maps.Animation.DROP,
                optimized: false
            });
        };

        $scope.ground.latlong = $scope.ground.latlong.split(",");
        google.maps.event.addDomListener(window, 'load', initialize($scope.ground.latlong));
        google.maps.event.addDomListener(window, 'resize', function() {
            map.setCenter(mapProp.center);
        });

        $scope.centerOnGround = function() {
            map.setCenter(mapProp.center);
        };

        $scope.link = "Locate on Google Maps";
        $scope.showLocation = false;
        $scope.showMap = function() {
            $scope.showLocation = !$scope.showLocation;
            if (!$scope.showLocation) {
                $(".mapContent").css({'z-index': '0'});
                $(".groundInfo").css({'color': '#fff'});
                $("#linkImage").css({'color': '#fff', 'border-color': '#fff'});
                $scope.link = "Locate on Google Maps";
            }
            else {
                $(".mapContent").css({'z-index': '10'});
                $(".groundInfo").css({'color': '#000'});
                $("#linkImage").css({'color': '#000', 'border-color': '#000'});
                $scope.link = "Back to Ground Image";
            }
        };
        if (!$scope.showLocation) {
            $(".mapContent").css({'z-index': '0'});
        }
        else {
            $(".mapContent").css({'z-index': '10'});
        }
    };
    // xyz();
}]);

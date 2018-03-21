// 'use strict';

var demoAppFilters = angular.module('demoAppFilters', []);

demoAppFilters.filter('carsFilter', function () {
    return function (cars, filterObject) {
        var carsArray = cars;
        var returnArray = [];
        if (filterObject.price >= 0) {
        	for (var i = 0; i < carsArray.length; i++) {
        		if (carsArray[i].price <= filterObject.price) {
        			returnArray.push(carsArray[i]);
        		}
        	}
        }
        else {
        	returnArray = carsArray;
        }

        if (filterObject.year.length > 0) {
        	var yearFilteredArray = [];
        	for (var i = 0; i < filterObject.year.length; i++) {
        		for (var j = 0; j < returnArray.length; j++) {
        			if (returnArray[j].year === filterObject.year[i]) {
        				yearFilteredArray.push(returnArray[j]);
        			}
        		}
        	}
        	returnArray = yearFilteredArray;
        }

        if (filterObject.make.length > 0) {
            var makeFilteredArray = [];
            for (var i = 0; i < filterObject.make.length; i++) {
                for (var j = 0; j < returnArray.length; j++) {
                    if (returnArray[j].make === filterObject.make[i]) {
                        makeFilteredArray.push(returnArray[j]);
                    }
                }
            }
            returnArray = makeFilteredArray;
        }

        return returnArray;
    };
});
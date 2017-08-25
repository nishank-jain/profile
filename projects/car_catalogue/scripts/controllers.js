// 'use strict';

var demoAppControllers = angular.module('demoAppControllers', []);

demoAppControllers.controller('carsController', function() {
	var carsCtrl = this;

	carsCtrl.data = [
		{
			'make': 'Maruti Suzuki',
			'model': 'Alto',
			'year': '2008',
			'price': 300000,
			'imageUrl': 'images/alto.png'
		},
		{
			'make': 'Maruti Suzuki',
			'model': 'Celerio',
			'year': '2015',
			'price': 400000,
			'imageUrl': 'images/celerio.png'
		},
		{
			'make': 'Maruti Suzuki',
			'model': 'Wagon R',
			'year': '2002',
			'price': 450000,
			'imageUrl': 'images/wagonr.png'
		},
		{
			'make': 'Hyundai',
			'model': 'Eon',
			'year': '2012',
			'price': 350000,
			'imageUrl': 'images/eon.png'
		},
		{
			'make': 'Hyundai',
			'model': 'Xcent',
			'year': '2010',
			'price': 600000,
			'imageUrl': 'images/xcent.png'
		},
		{
			'make': 'Honda',
			'model': 'Brio',
			'year': '2012',
			'price': 550000,
			'imageUrl': 'images/brio.png'
		},
		{
			'make': 'Honda',
			'model': 'City',
			'year': '2008',
			'price': 100000,
			'imageUrl': 'images/city.png'
		},
		{
			'make': 'Honda',
			'model': 'Mobilio',
			'year': '2013',
			'price': 900000,
			'imageUrl': 'images/mobilio.png'
		},
		{
			'make': 'Toyota',
			'model': 'Etios',
			'year': '2009',
			'price': 750000,
			'imageUrl': 'images/etios.png'
		},
		{
			'make': 'Toyota',
			'model': 'Fortuner',
			'year': '2011',
			'price': 2600000,
			'imageUrl': 'images/fortuner.png'
		},
		{
			'make': 'Volkswagen',
			'model': 'Polo',
			'year': '2014',
			'price': 800000,
			'imageUrl': 'images/polo.png'
		},
		{
			'make': 'Volkswagen',
			'model': 'Vento',
			'year': '2015',
			'price': 1150000,
			'imageUrl': 'images/vento.png'
		},
		{
			'make': 'Ford',
			'model': 'EcoSport',
			'year': '2016',
			'price': 900000,
			'imageUrl': 'images/ecosport.png'
		},
		{
			'make': 'Ford',
			'model': 'Endeavour',
			'year': '2007',
			'price': 2650000,
			'imageUrl': 'images/endeavour.png'
		},
		{
			'make': 'Ford',
			'model': 'Aspire',
			'year': '2010',
			'price': 750000,
			'imageUrl': 'images/aspire.png'
		},
		{
			'make': 'Ford',
			'model': 'Figo',
			'year': '2011',
			'price': 600000,
			'imageUrl': 'images/figo.png'
		},
		{
			'make': 'Chevrolet',
			'model': 'Spark',
			'year': '2007',
			'price': 350000,
			'imageUrl': 'images/spark.png'
		},
		{
			'make': 'Chevrolet',
			'model': 'Beat',
			'year': '2013',
			'price': 550000,
			'imageUrl': 'images/beat.png'
		},
		{
			'make': 'Renault',
			'model': 'Duster',
			'year': '2015',
			'price': 1100000,
			'imageUrl': 'images/duster.png'
		},
		{
			'make': 'Audi',
			'model': 'R8',
			'year': '2015',
			'price': 3000000,
			'imageUrl': 'images/r8.png'
		}
	];

	carsCtrl.dataFilteredByQuery = [];

	carsCtrl.minPrice = 100000000;
	carsCtrl.maxPrice = 10;
	carsCtrl.years = [];
	carsCtrl.makes = [];

	for (var i = 0; i < carsCtrl.data.length; i++) {
		if (carsCtrl.minPrice > carsCtrl.data[i].price) {
			carsCtrl.minPrice = carsCtrl.data[i].price;
		}

		if (carsCtrl.maxPrice < carsCtrl.data[i].price) {
			carsCtrl.maxPrice = carsCtrl.data[i].price;
		}

		if (carsCtrl.years.indexOf(carsCtrl.data[i].year) < 0) {
			carsCtrl.years.push(carsCtrl.data[i].year);
		}

		if (carsCtrl.makes.indexOf(carsCtrl.data[i].make) < 0) {
			carsCtrl.makes.push(carsCtrl.data[i].make);
		}
	}

	carsCtrl.years.sort(function(a, b){return a-b});
	carsCtrl.makes.sort();

	// carsCtrl.modifiedData = carsCtrl.dataFilteredByQuery.map(function(obj) {
	// 	var modObj = obj;
	// 	modObj.DepartureDecimal = carsCtrl.convertToMilitaryTime(obj.Departure);
	// 	modObj.ArrivalDecimal = carsCtrl.convertToMilitaryTime(obj.Arrival);
	// 	modObj.DurationDecimal = carsCtrl.convertDurationToDecimal(obj.Duration);

	// 	if (carsCtrl.minPrice > obj.Price) {
	// 		carsCtrl.minPrice = obj.Price;
	// 	}

	// 	if (carsCtrl.maxPrice < obj.Price) {
	// 		carsCtrl.maxPrice = obj.Price;
	// 	}
		
	// 	return modObj;
	// });

	document.getElementById("myRange").min = carsCtrl.minPrice;
	document.getElementById("myRange").max = carsCtrl.maxPrice;

	carsCtrl.priceRange = carsCtrl.maxPrice;

	carsCtrl.activeYears = [];
	carsCtrl.activeMakes = [];
	carsCtrl.filterObject = {
		price : carsCtrl.maxPrice,
		make: carsCtrl.activeMakes,
		year: carsCtrl.activeYears
	};

	carsCtrl.filterByPrice = function (priceValue) {
		carsCtrl.filterObject.price = priceValue;
	};

	carsCtrl.filterByMake = function (make) {
		if (carsCtrl.activeMakes.indexOf(make) < 0) {
			carsCtrl.activeMakes.push(make);
		}
		else {
			carsCtrl.activeMakes.splice(carsCtrl.activeMakes.indexOf(make), 1);
		}

		carsCtrl.filterObject.make = carsCtrl.activeMakes;
	};

	carsCtrl.filterByYear = function (year) {
		if (carsCtrl.activeYears.indexOf(year) < 0) {
			carsCtrl.activeYears.push(year);
		}
		else {
			carsCtrl.activeYears.splice(carsCtrl.activeYears.indexOf(year), 1);
		}

		carsCtrl.filterObject.year = carsCtrl.activeYears;
	};

	carsCtrl.filterScreenOpen = false;

	carsCtrl.closeFilterScreen = function () {
		$('#filters').css('display', 'none');
	};

	carsCtrl.openFilterWindow = function () {
		$('#filters').css('display', 'inline-block');
	};
});
var express = require('express');
var router = express.Router();
var groundsController = require('../controllers/grounds');
var async = require('async');

// Home page
router.get('/', function(req, res) {
	groundsController.list(req, function(err, grounds) {
		if (err) {
			res.send(err);
			return;
		}
		res.render('beta/index', {
			title: "Courtside Beta - Book sports facilities in Bangalore",
			description: "Why spend time finding a ground when someone else can do that for you? We book, you play. Message us here and we will get back to you.",
			topbar: false,
			grounds: grounds
		});
	});
});


// Ground page
router.get('/:groundSlug', function(req, res) {
	async.parallel({
		groundsList: function(callback) {
			groundsController.list(req, function(err, grounds) {
				if (err) {
					res.send(err);
					return;
				}
				callback(err, grounds);
			});
		},
		groundDetails: function (callback) {
			groundsController.detail(req, function(err, details) {
				if (err) {
					res.send(err);
					return;
				}
				callback(err, details);
			});
		}
	},
	function(err, results) {
		if (err) {
			res.status(404).render('404');
		}
		else {
			var groundDetails = results.groundDetails.ground;
			var groundsList = results.groundsList;
			res.render('beta/ground', {
				title: groundDetails.name + ' - ' + groundDetails.area  + ' - ' + groundDetails.city + ' | Courtside',
				description: groundDetails.name + " - Ground details",
				topbar: false,
				ground: groundDetails,
				groundsList: groundsList
			});
		}
	});
});


module.exports = function (app) {
	app.use('/beta', router);
};
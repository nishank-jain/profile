var express = require('express');
var router = express.Router();
var groundsController = require('../controllers/grounds');

// Home page
router.get('/', function(req, res) {
	groundsController.list(req, function(err, grounds) {
		if (err) {
			res.send(err);
			return;
		}
		res.render('beta/index', {
			title: "Courtside - Book sports facilities in Bangalore",
			description: "Why spend time finding a ground when someone else can do that for you? We book, you play. Message us here and we will get back to you.",
			topbar: false,
			grounds: grounds
		});
	});
});


// Ground page
router.get('/:groundSlug', function(req, res) {
	groundsController.detail(req, function(err, result) {
		if (err) {
			res.send(err);
			return;
		}
		res.render('beta/ground', {
			title: "Courtside - Book sports facilities in Bangalore",
			description: "Why spend time finding a ground when someone else can do that for you? We book, you play. Message us here and we will get back to you.",
			topbar: false,
			ground: result.ground,
			courts: result.courts
		});
	});
});


module.exports = function (app) {
	app.use('/beta', router);
};
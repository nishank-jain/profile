var express = require('express');
var router = express.Router();
var Ground = require('../models/grounds');

// Home page route
router.get('/', function(req, res) {
	// Ground.find({}, function(err, grounds) {
	// 	if (err) throw err;
	// 	console.log(grounds);
	// });
	res.render('beta/index', {
		title: "Courtside - Book sports facilities in Bangalore",
		description: "Why spend time finding a ground when someone else can do that for you? We book, you play. Message us here and we will get back to you.",
		topbar: false
	});
});

module.exports = function (app) {
	app.use('/beta', router);
};
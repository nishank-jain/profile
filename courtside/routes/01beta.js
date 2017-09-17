var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function(req, res) {
	res.render('beta/index', {
		title: "Courtside - Book sports facilities in Bangalore",
		description: "Why spend time finding a ground when someone else can do that for you? We book, you play. Message us here and we will get back to you.",
		topbar: false
	});
});

module.exports = function (app) {
	app.use('/beta', router);
};
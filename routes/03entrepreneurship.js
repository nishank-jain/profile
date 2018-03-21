var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function(req, res) {
	res.render('entrepreneurship/index', {
		title: "Entrepreneurship - Nishank Jain",
		description: "Starting up a company - a sports venture called Courtside, building technology from ground up."
	});
});

module.exports = function (app) {
	app.use('/entrepreneurship', router);
};
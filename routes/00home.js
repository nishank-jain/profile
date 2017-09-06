var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function(req, res) {
	res.render('home/index', {
		title: "Portfolio - Nishank Jain",
		description: "About me"
	});
});

module.exports = function (app) {
	app.use('/', router);
};
var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function(req, res) {
	console.log("device :", req.device.type);
	res.render('home/index', {
		title: "Portfolio - Nishank Jain",
		description: "About me",
		topbar: false
	});
});

module.exports = function (app) {
	app.use('/', router);
};
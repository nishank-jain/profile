var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function(req, res) {
	res.render('academics/index', {
		title: "Academics - Nishank Jain",
		description: "Educational background, academic achievements, internships, projects and other activities."
	});
});

module.exports = function (app) {
	app.use('/academics', router);
};
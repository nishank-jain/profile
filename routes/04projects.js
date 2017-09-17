var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function(req, res) {
	res.render('projects/index', {
		title: "Projects - Nishank Jain",
		description: "Personal projects in web development using multiple technologies including AngularJS, d3.js, Node.js, MongoDB, SQLite, Jade Templating Engine and Express.js",
		topbar: false
	});
});

module.exports = function (app) {
	app.use('/projects', router);
};
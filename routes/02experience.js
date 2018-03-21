var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function(req, res) {
	res.render('experience/index', {
		title: "Experience - Nishank Jain",
		description: "Professional work experience and startup experience."
	});
});

module.exports = function (app) {
	app.use('/experience', router);
};
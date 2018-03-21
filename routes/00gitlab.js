var express = require('express');
var router  = express.Router();
var gitlab = require('gitlab')({
  url:   'http://gitlab-wasp.corp.sjc.shn',
  token: 'yDPaWpxbm6K2gzasJZrd'
});

router.get('/projects', function(req, res) {
	gitlab.projects.all(function(projects) {
		res.json({
			success: true,
			projects: projects
		});
	});
});

module.exports = function (app) {
	app.use('/', router);
};
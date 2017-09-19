var Grounds = require('../models/grounds');

function list(req, callback) {
	Grounds.find({}, function(err, grounds) {
		if (err) throw err;
		callback(err, grounds);
	});
}

function detail(req, callback) {
	var slug = req.params.groundSlug;
	Grounds.find({"slug": slug}, function(err, ground) {
		if (err) throw err;
		callback(err, ground[0]);
	});
}

module.exports = {
	list: list,
	detail: detail
};
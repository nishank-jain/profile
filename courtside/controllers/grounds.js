var Grounds = require('../models/grounds');
var Courts = require('../models/courts');

function list(req, callback) {
	Grounds.find({}, function(err, grounds) {
		if (err) throw err;
		callback(err, grounds);
	});
}

function detail(req, callback) {
	var slug = req.params.groundSlug;
	Grounds.findOne({"slug": slug}, function(err, ground) {
		if (err) throw err;
		var ground_id = ground._id;
		Courts.find({'parent_ground_id': ground_id}, function (err, courts) {
			if (err) throw err;
			var result = {
				ground: ground,
				courts: courts
			};
			callback(err, result);
		});
	});
}

module.exports = {
	list: list,
	detail: detail
};
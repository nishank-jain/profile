var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Parent Ground Schema
var courtSchema = new Schema({
	parent_id: String,
	id: String,
	surface: String,
	size: String,
	linked: [String],
	court_no: Number,
	no_of_images: Number,
	parent_ground_id: Schema.Types.ObjectId
},
{
	timestamps: true
});

// Ground Model
var Courts = mongoose.model('courts', courtSchema);

// Make this available to our users in our Node applications
module.exports = Courts;
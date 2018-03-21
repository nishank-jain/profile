var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Parent Ground Schema
var groundSchema = new Schema({
	name: String,
	area: String,
	latlong: String,
	sports: Schema.Types.Mixed,
	isRegistered: Boolean,
	phoneNumber: Number,
	owner: String,
	amenities: Schema.Types.Mixed,
	pricing: Schema.Types.Mixed,
	equipment: Schema.Types.Mixed,
	restrictions: Schema.Types.Mixed,
	no_of_images: Schema.Types.Mixed,
	city: String,
	call_only: Boolean,
	book_only: Boolean,
	slug: String,
	images: Schema.Types.Mixed
},
{
	timestamps: true
});

// Ground Model
var Grounds = mongoose.model('grounds', groundSchema);

// Make this available to our users in our Node applications
module.exports = Grounds;
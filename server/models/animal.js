// require mongoose
var mongoose = require('mongoose');

var AnimalSchema = new mongoose.Schema({
	name:String
})
mongoose.model('Animal',AnimalSchema)
var Animal = mongoose.model('Animal')
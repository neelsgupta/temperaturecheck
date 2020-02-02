const mongoose = require('mongoose');
const TemperatureSchema = new mongoose.Schema({  
 temperature: String,
 city: String,
 time: String
});
module.exports = mongoose.model('Temperature', TemperatureSchema);
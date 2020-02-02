const mongoose = require('mongoose');
const sfaxtemperatureSchema = new mongoose.Schema({  
 temperature: String,
 date: String,
 city: String
});
module.exports = mongoose.model('Sfaxtemperature', sfaxtemperatureSchema);
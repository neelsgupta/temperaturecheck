'use strict';
require('dotenv').config({ path: './variables.env' });
const connectToDatabase = require('./db');
const Temperature = require('./models/Temperature')
const Sfaxtemperature = require('./models/sfaxtemperature')
var request = require('request');

module.exports.currenttempincovilha = (event, context, callback) => {
 context.callbackWaitsForEmptyEventLoop = false;
 const apiKey = 'f8cb9469b4a350e16329ca0c656d74ae';
 const city = 'Covilha';
 const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

 request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
	var temperature = temperatureincovilha(weather)
	connectToDatabase()
    .then(() => {
	 Temperature.create(JSON.parse(temperature))
       .then(body => callback(null, {
         statusCode: 200,
         body: temperature
       }))  
       .catch(err => callback(null, {
         statusCode: err.statusCode || 500,
         headers: { 'Content-Type': 'text/plain' },
         body: 'Could not fetch the notes.'
       }))
   });
  }
 });
};

function temperatureincovilha(weather){
	var currentdate = new Date();
	var datetime = "Date: " + currentdate.toLocaleDateString()+ ", Time: " + currentdate.toLocaleTimeString();
					
	var temp = {};
	var tempCelsius = Math.round((weather.main.temp - 32) * 5 / 9);
	temp.temperature=tempCelsius+' degree celsius';
	temp.city=weather.name;
	temp.time=datetime

	return JSON.stringify(temp);
}

module.exports.avgtempinsfax = (event, context, callback) => {
 context.callbackWaitsForEmptyEventLoop = false;
 connectToDatabase()
   .then(() => {
     Sfaxtemperature.find()
       .then(sfaxtemperature => callback(null, {
         statusCode: 200,
         body: calculateavg(sfaxtemperature)
       }))
       .catch(err => callback(null, {
         statusCode: err.statusCode || 500,
         headers: { 'Content-Type': 'text/plain' },
         body: 'Could not fetch the sfaxtemperature.'
       }))
   });
};

function calculateavg(sfaxtemperature){	
	return "16";
}


//this is the node.js port of the java forcast program.

const request = require('superagent');

var inputName = require('../api/controllers/weatherController');
var urlToPass = "http://api.openweathermap.org/data/2.5/weather?q=" + inputName + "&APPID=8ed55356b0c310798b7216c27917e611";
var weatherData = "weatherData test value";
var requestError = "requestError test value";
//console.log(inputName);
//console.log(urlToPass);

getWeather = new Promise((resolve, reject) => {
  let dataRetreivedSuccessfully = false;
  
  request
  .get(urlToPass) // hopefully this allows it to use input for the city name
  .end((err, res) => {
    if(err){requestError = err}
    else {
      weatherData = res.body;
      dataRetreivedSuccessfully = true;
    }
  });

  if(dataRetreivedSuccessfully) {
    resolve(weatherData);
  }
  if(!dataRetreivedSuccessfully) {
    reject(requestError);
  }
});
module.exports = getWeather;

/* // this is the code that requests the weather data
request
  .get(urlToPass) // hopefully this allows it to use input for the city name 
  .end((err, res) => {
    if(err){console.log(err)}
    else {
      weatherData = res.body;
      dataRetreivedSuccessfully = true
    }
  });
*/

function keltofar(kelvin) {
  return Math.floor(kelvin * 9/5 - 459.67);
}


const request = require('request')

const getWeather = (lat,lng, callback) => {
request(
  {
    url: `https://api.darksky.net/forecast/596d4e2d3c3df4c1ce95c141500a28ca/${lat},${lng}`,
    json: true // transform json en objet
  },(error, response, body) => {
  if(!error && response.statusCode === 200 ){
      // console.log(body.currently.temperature);
      callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
      })
  }
  else {
    //   console.log('Unable to fetch weather');
    callback('Unable to fetch weather');
  }

  }
)}

module.exports={getWeather};
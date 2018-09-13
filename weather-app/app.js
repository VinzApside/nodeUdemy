const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .option({
    a: {
      demand: true,
      alias: 'address',
      describe: 'address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h').argv;

  const encodeAddress = encodeURIComponent(argv.address);
  const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`;

axios.get(geocodeUrl).then((response)=>{
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('unable to find that adress.')
    }
    const lat = response.data.results[0].geometry.location.lat;
    const lng = response.data.results[0].geometry.location.lng;
    const weatherUrl = `https://api.darksky.net/forecast/596d4e2d3c3df4c1ce95c141500a28ca/${lat},${lng}`;

    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response)=>{
    const temperature = response.data.currently.temperature;
    const apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`it's actually : ${temperature}. It feels like : ${apparentTemperature}`);
}).catch((e)=>{
    if(e.code === "ENOTFOUND"){
        console.log('unable to connect to API servers.');
    } else {
        console.log(e.message);
    }
});
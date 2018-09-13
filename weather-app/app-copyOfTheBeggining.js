const yargs = require('yargs')

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

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


  geocode.geocodeAddress(argv.address, (errorMessage, results)=>{
      if(errorMessage){
          console.log(errorMessage)
      }
      else{
          //console.log(JSON.stringify(results, undefined,2));
          console.log(results.address);
          //return (results)
          weather.getWeather(results.lat,results.lng,(errorMessage, weatherResults)=>{
            if(errorMessage){
                console.log(errorMessage)
            }
            else{
                //console.log(JSON.stringify(weatherResults, undefined,2))
                console.log(`it's actually : ${weatherResults.temperature}. It feels like : ${weatherResults.apparentTemperature}`);
            }
        });
      }
  })

  

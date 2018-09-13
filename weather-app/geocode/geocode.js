const request = require('request')

const geocodeAddress = (address, callback)=>{
    // console.log(address)
    const encodeAddress = encodeURIComponent(address)

request(
  {
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
    json: true // transform json en objet
  },(error, response, body) => {
    if(error){
        callback('unable to connect to google servers')
        // console.log('unable to connect to google servers');
    }
    else if (body.status !== "OK"){
        callback('unable to find that adress.')
        // console.log('unable to find that adress.');
    }
    else if (body.status=== "OK"){
        callback(undefined,{ //undefined car pas d'erreur
            address: body.results[0].formatted_address,
            lat: body.results[0].geometry.location.lat,
            lng: body.results[0].geometry.location.lng,
        });
    // console.log(JSON.stringify(body, undefined, 2));
    // console.log(`Address: ${body.results[0].formatted_address}`);
    // console.log(`Lat: ${body.results[0].geometry.location.lat}`);
    // console.log(`Lng: ${body.results[0].geometry.location.lng}`);
    }

  }
)
}


module.exports={geocodeAddress}


//596d4e2d3c3df4c1ce95c141500a28ca
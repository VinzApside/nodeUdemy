const request = require('request')

const geocodeAddress = (address)=>{

    const encodeAddress = encodeURIComponent(address);
    // console.log(encodeAddress);

    return new Promise((res,rej)=>{
        request(
            {
                url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
                json: true 
        },(error, response, body) => {
          if(error){
              rej('unable to connect to google servers')
          }
          else if (body.status !== "OK"){
              rej('unable to find that adress.')
          }
          else if (body.status === "OK"){
              res({
                    address: body.results[0].formatted_address,
                    lat: body.results[0].geometry.location.lat,
                    lng: body.results[0].geometry.location.lng,
              })
          }
    })


    // request(
    //     {
    //       url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
    //       json: true // transform json en objet
    //     },(error, response, body) => {
    //       if(error){
    //           callback('unable to connect to google servers')
    //           // console.log('unable to connect to google servers');
    //       }
    //       else if (body.status !== "OK"){
    //           callback('unable to find that adress.')
    //           // console.log('unable to find that adress.');
    //       }
    //       else if (body.status=== "OK"){
    //           callback(undefined,{ //undefined car pas d'erreur
    //               address: body.results[0].formatted_address,
    //               lat: body.results[0].geometry.location.lat,
    //               lng: body.results[0].geometry.location.lng,
    //           });
    //       }
      
    //     }
    //   )

})};

geocodeAddress('19146')
.then((location)=>{
    console.log(JSON.stringify(location,undefined,2));
}, (errorMessage)=>{
    console.log(errorMessage);
})
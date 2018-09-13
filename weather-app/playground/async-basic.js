console.log('Starting app');

setTimeout(()=>{
    console.log('inside of callback');
    //clg apparait apparait finishing app
},2000)

setTimeout(()=>{
    console.log('zero delay');
    //clg apparait apparait finishing app mais avant l'autre
},0)

console.log('Finishing app');
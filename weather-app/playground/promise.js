const asyncAdd = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a+b);
            }else{
                reject('arguments must be numbers')
            }
        }
    ,1500)
})};

// asyncAdd(5,7).then((res)=>{ //problème si le premier message est une erreur !
//     console.log('result: ', res);
//     return asyncAdd(res, 33)
// }, (errorMessage)=>{console.log(errorMessage)}).then((res)=>{
//     console.log('result 2 : ', res);
// }, (errorMessage)=>{
//     console.log(errorMessage);
// });

asyncAdd(5,7).then((res)=>{ 
    console.log('result: ', res);
    return asyncAdd(res, 33)
}).then((res)=>{
    console.log('result 2 : ', res);
}).catch((errorMessage)=>{
    console.log(errorMessage)
});

// let somePromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('Hey, it worked !')
//         reject('unable to fulfill promise !')
//     }, 2500)
    
// });

// somePromise.then((message)=>{
//     console.log(('Success',message ));
// }, (errorMessage)=> {
//     console.log('error :', errorMessage);
// })
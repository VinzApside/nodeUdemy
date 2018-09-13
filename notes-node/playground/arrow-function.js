const square = x => Math.pow(x,2);
//pas besoin de return car juste une ligne

console.log(square(9));

let user = {
    name: 'andrew',
    sayHi:() =>{
        //console.log(arguments);
        // on  n'a pas d'argument dans ce cas
        console.log(`hi, i'm ${this.name}`);
        //ne connait pas this
    } ,
    sayHiAlt () {
        console.log(arguments);
        console.log(`hi, i'm ${this.name}`);
        // pas de deux point et de fonction flechée ça marche
    }

}

user.sayHi(1,2);
user.sayHiAlt(1,2);
console.log("starting app.js!")

const fs = require('fs');
const os = require("os");
const _ = require('lodash');
const notes = require('./notes.js');

//let user = os.userInfo();

// fs.appendFile("greetings.txt", `hello ${user.username} !`, function (err){
//     if (err){
//         console.log('unable to write to file');
//     }
// })
// // permet d'ajouter du texte dans greetings.txt


// console.log(notes.age);
// // permet d'afficher l'age determiné dans notes.js

// let res = notes.addNote();
// console.log(res);

// let exercice = notes.add(5,6);
// console.log(exercice);

// console.log(_.isString(true));
// console.log(_.isString("true"));
let filteredArray = _.uniq(["vinz",1, 2, "vinz", 1,2,3])
console.log(filteredArray);
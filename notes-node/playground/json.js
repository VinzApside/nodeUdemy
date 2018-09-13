// let obj = {
//     name : 'jason'
// }

// const stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// const personString = '{"name":"vinz", "age": 37}'
// const person = JSON.parse(personString)
// //on garde un objet grace aux ' et parse
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

let originalNote={
    title: "some title",
    body: 'some body',
}



const originalNoteString= JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);
//sauve l'objet dans un dossier notes.json

const noteString = fs.readFileSync('notes.json');
//récupère l'objet stocké dans le fichier notes.json
const note = JSON.parse(noteString);

console.log(typeof note)
console.log(note.title);
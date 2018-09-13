// console.log("starting app.js!")

const fs = require("fs")
const _ = require('lodash');
const yargs = require('yargs')

const notes = require('./notes.js');

// const argv = yargs.argv;
// // sans la fonction commande au début
const titleOption = {
  describe: 'Title of note',
  demand: true, //rend obligatoire le titre avec la fonction add
  alias: 't' //permet d'utiliser -t ou --title
};
const bodyOption = {
  describe: 'body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add','Add a new note', {
    title: titleOption,
    body:bodyOption,
  }) // permet de définir des option pour add
  .command('list', 'list all the notes')
  .command('read', 'read a note', {
    title: titleOption,
  } )
  .command('remove', 'remove a note', {
    title: titleOption
  })
  .help()
  .argv;


const command = process.argv[2];
// console.log("command :", command);
// console.log("process :",process.argv);
// permet d'afficher un argument quand on tape ex: npm app list
console.log('yargs :', argv)
//permet d'afficher mieux un argument en le parsing

if (command === "add"){
    console.log('adding a new note ');
    let note = notes.ajoutNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  const allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach(note => {
    notes.logNote(note)
  });
} else if (command === 'read') {
  
  let note = notes.getNote(argv.title);
  if (note !== undefined) {
    console.log('Note reading ...');
    console.log('--');
    console.log(`Title: ${argv.title}`);
    console.log(`Body: ${note}`);
  } else {
    console.log('Note does not exist');
  }
} else if (command === 'remove') {
  let noteRemove = notes.removeNote(argv.title);
  let message = noteRemove?'note was removed' : 'note not found';
  console.log(message); 
} else {
  console.log('Command not recognized');
}

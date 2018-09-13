// console.log('open notes.js')

// module.exports.age = 25;

// module.exports.addNote = () => {
//     console.log('addNote');
//     return 'New note';
// }

// module.exports.add = (a,b) => {
//  return a+b;
// }

const fs = require('fs')

const fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
  };


let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const ajoutNote = (title, body) => {
  // console.log('adding note', title, body);
  // // permet de faire afficher deux chats lorsqu'on écrit : node app.js add --title="deux" --body="chats"
  let notes = fetchNotes();
  let note = {
    title,
    body
  }



  let duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  console.log('get all notes');
  return fetchNotes();
}

const getNote = (title) => {
  //console.log('Getting note', title);
  let result;
  let getDatas = fetchNotes();
  let filteredDatas = getDatas.filter(note  => note.title === title);
 
  if (filteredDatas[0]){
    result = filteredDatas[0].body
  }
  else {
    result = undefined;
  }
  return result;
};

const removeNote = (title) => {
  console.log('Removing note', title);
  let getDatas = fetchNotes();
  //console.log(getDatas);
  let newNotes= getDatas.filter(note=>note.title !== title);
  saveNotes(newNotes);

  return getDatas.length !== newNotes.length;
};

const logNote = (note) => {
  debugger;
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  ajoutNote,
  getAll,
  getNote,
  removeNote,
  logNote
}

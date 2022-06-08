const chalk = require("chalk");
const fs = require("fs");
const getNote = function (title, body) {};

// ################################################################
// #######################       Utility functions
// ################################################################

function saveNotes(notes) {
  //Converting to JSON format and then saving it to the json file
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
}

function loadNotes() {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

function redLog(mess) {
  console.log(chalk.bgRed(mess));
}
function greenLog(mess) {
  console.log(chalk.bgGreen(mess));
}

// ################################################################
// #######################       Adding notes to the JSON
// ################################################################

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    //Adding new note to the already present notes collection
    notes.push({
      title: title,
      body: body,
    });

    // Saving the notes to the JSON
    greenLog("New note added!");
    saveNotes(notes);
  } else {
    redLog("Note title taken!");
  }
};

// ################################################################
// #######################       Removing a note
// ################################################################
function removeNote(title) {
  const notes = loadNotes();
  //   let flag = false;

  try {
    const notesToKeep = notes.filter(function (note) {
      //   if (note.title === title) {
      //     flag = true;
      //   }
      return note.title !== title;
    });

    saveNotes(notesToKeep);
    // if (flag) console.log(chalk.bgGreen(`Note removed !!!\n`));
    // else console.log(chalk.bgRed(`Note not found !!!\n`));

    if (notesToKeep.length !== notes.length)
      console.log(chalk.bgGreen(`Note removed !!!\n`));
    else console.log(chalk.bgRed(`Note not found !!!\n`));
  } catch {
    return [];
  }
}

module.exports = {
  addNote,
  getNote,
  removeNote,
};

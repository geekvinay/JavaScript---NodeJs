// ################################################################
// #######################       Importing all the modules and requires
// ################################################################
const chalk = require("chalk");
const fs = require("fs");

const getNotes = function () {
  greenLog("Getting your notes....");
};

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
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
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

// ################################################################
// #######################       List all Notes
// ################################################################
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your Notes"));
  notes.forEach((element) => {
    console.log(`\nTitle : ${element.title}`);
    console.log(`Body : ${element.body}\n`);
  });
};

// ################################################################
// #######################       Read Note
// ################################################################

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log("\n" + chalk.inverse(note.title));
    console.log(note.body);
  } else {
    redLog("Note not found");
  }
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote,
};

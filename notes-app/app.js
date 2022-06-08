const yargs = require("yargs");
const chalk = require("chalk");
const { getNote, addNote, removeNote } = require("./notes");
const { describe, demand, demandOption, argv } = require("yargs");

// Customise yargs version
yargs.version("1.1.0");

// Add, Remove, List, Read

// Adding a new note
yargs.command({
  command: "add",
  describe: "Adding a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    addNote(argv.title, argv.body);
  },
});

// Remove a note
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function () {
    removeNote(argv.title);
  },
});

// Listing all notes
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: function () {
    console.log("Listing a note");
  },
});

// Reading notes
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note");
  },
});

yargs.parse();
// console.log(yargs.argv);

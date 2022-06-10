const express = require("express");
const { dirname } = require("path");
const path = require("path");
const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));

console.log(__dirname);
console.log(path.join(__dirname, "../public"));

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});

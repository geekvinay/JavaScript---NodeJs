const fs = require("fs");
const { userInfo } = require("os");
const person = {
  name: "Vinay Kishore",
  planet: "Earth",
  age: 20,
};

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);
const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = person.name;
data.planet = person.planet;
data.age = person.age;

userJSON = JSON.stringify(data);
fs.writeFileSync("1-json.json", userJSON);

console.log(data);

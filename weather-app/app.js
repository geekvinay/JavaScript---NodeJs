const request = require("request");
const yargs = require("yargs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forcast");

yargs.parse();
const address = process.argv;
if (!address) {
  console.log("Please provide the address!!!");
} else {
  geocode(address, (err, data) => {
    if (data) {
      forecast(data);
    } else console.log(err);
  });
}

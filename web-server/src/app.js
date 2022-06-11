const express = require("express");
const { dirname } = require("path");
const path = require("path");
const hbs = require("hbs");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

const forecast = require("./utils/forcast");
const geocode = require("./utils/geocode");

// Set handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to server
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Vinay Kishore",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    name: "Vinay Kishore",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Helping hand",
    name: "Vinay kishore",
  });
});

app.get("/help/*", (req, res) => {
  res.render("error", {
    title: "Error 404",
    name: "Error Page detected",
    errorMessage: "Help article not found",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({ error: "Please search for a valid address" });
  }

  var address = req.query.address;

  geocode(address, (err, data) => {
    if (data) {
      const location = data.loc;
      console.log(data);
      forecast({ lat: data.lat, long: data.long }, (forecastData) => {
        return res.send({
          forecast: forecastData,
          location,
          address: req.query.address,
        });
      });
    } else {
      return res.send({ error: err });
    }
  });
  return;

  //   res.send({
  //     forecast: "It is raining",
  //     location: "Hyderabad",
  //     address,
  //   });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({ error: "You must provide a search term" });
  }
  console.log(req.query.search);
  res.send({
    product: [],
  });
});

app.get("*", (req, res) => {
  res.render("error", {
    title: "Error 404",
    name: "Error Page detected",
    errorMessage: "Article not found",
  });
});

console.log(__dirname);
console.log(path.join(__dirname, "../public"));

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});

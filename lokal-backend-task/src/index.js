// Installing all packages requirede into index file
const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("./db/mongoose");

// Employee schema, Routers
const employee = require("./model/employee");
const employeeRouter = require("./routers/employee");

// declaring PORT dynamically
const port = process.env.PORT || 3000;

// Declaring all the routes and listening on the port
app.use(express.json());
app.use(employeeRouter);

app.listen(port, () => {
  console.log(`Setting up server on port ${port}`);
});

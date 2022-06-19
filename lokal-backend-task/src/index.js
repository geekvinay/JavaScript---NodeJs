const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("./db/mongoose");

// Employee schema, Routers
const employee = require("./model/employee");
const employeeRouter = require("./routers/employee");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(employeeRouter);

app.listen(port, () => {
  console.log(`Setting up server on port ${port}`);
});

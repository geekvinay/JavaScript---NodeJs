// Setting up schema for the employee mongoose model
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/lokal-task-api");

// EMPLOYEE SCHEMA
let employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
});

// EMPLOYEE MODEL
let employee = mongoose.model("Employee", employeeSchema);

module.exports = employee;

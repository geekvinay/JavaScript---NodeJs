// Requiring all the modules
const express = require("express");
const employeeModel = require("../model/employee");
const router = express.Router();

// Route to get all the employees
router.get("/employees", async (req, res) => {
  try {
    const employees = await employeeModel.find({});
    res.send(employees);
  } catch (e) {}
});

// Route to create new employees
router.post("/employees", async (req, res) => {
  const newEmployee = new employeeModel(req.body);
  try {
    await newEmployee.save();
    res.status(201).send(newEmployee);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Searching for finding an employee with given ID
router.get("/employees/:id", async (req, res) => {
  const searchingID = req.params.id;
  try {
    const employee = await employeeModel.findOne({ _id: searchingID });
    if (employee) {
      return res.status(200).send(employee);
    }
    res.status(404).send();
  } catch (e) {
    res.status(400).send(e);
  }
});

// Updating details for a given employee id
router.put("/employees/:id", async (req, res) => {
  const searchingID = req.params.id;
  const updates = Object.keys(req.body);
  try {
    const employee = await employeeModel.findById(searchingID);
    if (employee) {
      updates.forEach((update) => {
        employee[update] = req.body[update];
      });
      await employee.save();
      return res.send(employee);
    }
    res.status(404).send();
  } catch (e) {
    res.status(400).send();
  }
});

// Finding and deleting an employee details by ID
router.delete("/employees/:id", async (req, res) => {
  const searchingID = req.params.id;
  try {
    const employee = await employeeModel.findByIdAndDelete(searchingID);
    if (employee) {
      return res.status(200).send();
    }
    res.status(404).send();
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;

const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://localhost:27017/task-manager-api", {
  useNewUrlParser: true,
  //   useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
    default: "Anonymous",
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be postive");
      }
    },
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password cannot contain password");
      }
    },
  },
});

const me = new User({
  name: "Akbar",
  age: 39,
  email: "Anyonmous@gmail.com",
  password: "Phone1234!1",
});

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const task = new Task({
  description: "Eat Lunch   ",
});

task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch((err) => {
    console.log("Error", err);
  });

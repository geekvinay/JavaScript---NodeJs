const express = require("express");
const User = require("./models/user");
const app = express();
const port = process.env.PORT || 3000;
require("./db/mongoose");

app.use(express.json());

app.post("/users", (req, res) => {
  const user = new User(req.body);
  console.log(req.body);
  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

var mongoose = require("mongoose");
var mongoDB = "mongodb://localhost:27017/lokal-task-api";

mongoose.connect(mongoDB, { useNewUrlParser: true });

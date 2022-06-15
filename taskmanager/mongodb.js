// CRUD create read update delete

// const mongodb = require("mongodb");
// const ObjectID = mongodb.ObjectId;
// const MongoClient = mongodb.MongoClient;

const { ObjectID, MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://localhost:27017";
const databaseName = "task-manager";

const id = new ObjectId();
console.log(id);
console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to run database");
    }

    const db = client.db(databaseName);

    // db.collection("users").insertOne(
    //   {
    //     _id: id,
    //     name: "Vinay",
    //     age: 20,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }
    //     return console.log(result.ops);
    //   }
    // );
    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Clean the house",
    //       completed: true,
    //     },
    //     {
    //       description: "Renew inspection",
    //       completed: false,
    //     },
    //     {
    //       description: "Pot the plants",
    //       completed: false,
    //     },
    //     {
    //       description: "Clean the car",
    //       completed: true,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) return console.log("Unable to add documents");
    //     console.log(result.insertedIds);
    //   }
    // );
  }
);

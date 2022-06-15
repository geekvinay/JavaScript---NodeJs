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
    // {  "_id": {    "$oid": "62a9af086a11cef0f5b11da2"  },  "name": "Vinay",  "age": 20}

    // db.collection("users")
    //   .find({ name: "Vinay" })
    //   .count((err, count) => {
    //     console.log(count);
    //   });

    // db.collection("users").findOne(
    //   { _id: new ObjectId("62a9af086a11cef0f5b11da2") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("User not found");
    //     }
    //     console.log(user);
    //   }
    // );

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

    // db.collection("tasks").findOne(
    //   {
    //     _id: new ObjectId("62a98044b40e7f897db5cf0b"),
    //   },
    //   (error, data) => {
    //     console.log(data);
    //   }
    // );

    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((err, users) => {
    //     console.log(users);
    //   });
    // const updatePromise = db
    //   .collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectId("62a88a324e70a55e8bd5a4f1"),
    //     },
    //     {
    //       $set: {
    //         name: "Aaron",
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
);

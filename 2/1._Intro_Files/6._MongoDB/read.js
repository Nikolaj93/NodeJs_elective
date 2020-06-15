const { MongoClient } = require("mongodb");

const mongo = require("mongodb").MongoClient;

// Connection URL
const connectionUrl = "mongodb://localhost:27017";

MongoClient.connect(connectionUrl, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        throw "Error connecting to mongodb! " + error;
    }
    const animalFarmDB = client.db(dbName);
    const buildings = animalFarmDB.collection('builds')

    // findOne also works
    buildings.find({type: { $exists: true } }, { projection: { _id: 0 } }).limit(1).toArray((error, foundBuildings) => {
        console.log(foundBuildings);
        client.close();
    });
});

//næste video 17. april
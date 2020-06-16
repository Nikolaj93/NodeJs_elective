
const MongoClient = require("mongodb").MongoClient;

// Connection URL
const connectionUrl = "mongodb://localhost:27017";
const dbName = "buildings";

MongoClient.connect(connectionUrl, { useUnifiedTopology: true }, (error, client) => {
    const buildingsDB = client.db(dbName);

    const buildings = buildingsDB.collection("buildings");

    buildings.deleteOne({ building: "skyscraper"}, (error, deletedBuildings) => {
        console.log(deletedBuildings);
        client.close();
    });

});
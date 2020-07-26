"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreamyDatabase = void 0;
const Mongo = require("mongodb");
var CreamyDatabase;
(function (CreamyDatabase) {
    let mongoClient;
    let collection;
    async function connectToDB(_url) {
        mongoClient = new Mongo.MongoClient(_url, { useNewUrlParser: true, useUnifiedTopology: true });
        await mongoClient.connect();
        collection = mongoClient.db("Creamy").collection("Bestellungen");
        console.log("Datenbank verbunden", collection != undefined);
    }
    CreamyDatabase.connectToDB = connectToDB;
    // tslint:disable-next-line: no-any
    async function insert(_fb) {
        return await collection.insertOne(_fb);
    }
    CreamyDatabase.insert = insert;
})(CreamyDatabase = exports.CreamyDatabase || (exports.CreamyDatabase = {}));
//# sourceMappingURL=database.js.map
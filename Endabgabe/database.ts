import * as Mongo from "mongodb";
import { ParsedUrlQuery } from "querystring";

export namespace CreamyDatabase {

    let mongoClient: Mongo.MongoClient;
    let collection: Mongo.Collection;

    export async function connectToDB(_url: string): Promise<void> {
        mongoClient = new Mongo.MongoClient(_url, { useNewUrlParser: true, useUnifiedTopology: true });
        await mongoClient.connect();
        collection = mongoClient.db("Creamy").collection("Bestellungen");
        console.log("Datenbank verbunden", collection != undefined);
    }

    // tslint:disable-next-line: no-any
    export async function insert(_fb: ParsedUrlQuery): Promise<Mongo.InsertOneWriteOpResult<any>> {
        return await collection.insertOne(_fb);
    }
}
import express from "express";
import { MongoClient } from "mongodb";
import path from "path";

const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));

var url = "mongodb://localhost:27017";
const mongoClient = new MongoClient(url);

async function run() {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("test");
        const collection = db.collection("testtest");
        const results = await collection.find().toArray();
        console.log(results);
    }catch(err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
}
run();

app.listen(3000, () => {
    console.log('server started on port 3000');
});

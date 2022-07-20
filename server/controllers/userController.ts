import { mongoClient } from "../";

export const getUser = async (request: any, response: any) => {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("test");
        const collection = db.collection("testtest");
        const results = await collection.find().toArray();
        console.log(results);
    } catch (err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
};

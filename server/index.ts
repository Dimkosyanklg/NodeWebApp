import express from "express";
import { MongoClient } from "mongodb";
import path from "path";
import { userRouter } from "./routes/userRouter";


const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));

var url = "mongodb://localhost:27017";
export const mongoClient = new MongoClient(url);

app.use("/users", userRouter);

app.listen(3001, () => {
    console.log('server started on port 3000');
});

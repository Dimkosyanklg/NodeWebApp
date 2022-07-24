import { config } from "dotenv";
import express from "express";
import path from "path";
import { connectDB } from "./configs/database";
import { authRouter } from "./routes/authRouter";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";

config();
connectDB();

const app = express();

app.use(cors({ credentials: true, origin: process.env.FRONT_END_URL }));
app.use(cookieParser());

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../..', 'public')));

app.use("/auth", authRouter);
app.use("*", (req, res) => {
    res.status(404).json({
      success: "false",
      message: "Page not found",
      error: {
        statusCode: 404,
        message: "You reached a route that is not defined on this server",
      },
    });
  });


app.listen(3000, () => {
    console.log('server started');
});




import express from "express";
import { getUser } from "../controllers/userController";

export const userRouter = express.Router();

userRouter.use("/", getUser);

import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect("mongodb://localhost:27017/app", {}).catch((error) => {
        console.error(error);
        process.exit(1);
    });
};

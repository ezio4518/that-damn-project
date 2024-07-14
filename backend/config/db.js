import mongoose from "mongoose";

//isko safe krna h
export const connectDB = async () => {
    await mongoose.connect(`${process.env.MONGODB_URI}/that-damn-project`).then(()=>console.log("DB connected"));
}


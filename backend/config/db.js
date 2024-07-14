import mongoose from "mongoose";

//isko safe krna h
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ezio:Myy110998@cluster0.vz623uu.mongodb.net/that-damn-project').then(()=>console.log("DB connected"));
}


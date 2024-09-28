import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://bibaswan:bibaswan1234@cluster0.aaiut.mongodb.net/foody').then(()=>console.log("DB Connected"));
}
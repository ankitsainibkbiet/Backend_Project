import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

dotenv.config()

const connectDB = async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("DB Connected")
    }catch(err){
        console.log("Connection Failure in DB : ", err.message)
        process.exit(1)
    }
}

export default connectDB
import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";


const connectDB = async () => {      //database connect to pronblem can be there so keep in try catch
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n mongoDB connected !! DB host: $ {connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MONGODB connection FAILED", error);
        process.exit(1);
         
    }
}
 
export default connectDB




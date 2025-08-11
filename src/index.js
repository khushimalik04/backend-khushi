//require('dot-env').config({path: './env'})   //this spoils code consistency

import dotenv from "dotenv"  //bt we need to config also
import connectDB from "./db/index.js"

//config
dotenv.config({
    path: './env'
})

connectDB()




















/*
import express from "express"
const app = express()


( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/$DB_NAME`)
        app.on("error", (error) => {
            console.log("ERRR: ",error);
            throw error;
        })

        app.listen(process.nextTick.prototype, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    
    } catch (error) {
        console.error("ERROR:", error)
        throw err
    }
})()



// function connectDB(){}

// connectDB()*/
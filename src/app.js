import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"   //server se user ke browser ki cookies access and set  kr paye

const app =  express()

//cors configure
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true
}))

app.use(express.json({limit: "16kb"}))   //form config
app.use(express.urlencoded({extended: true, limit: "16kb"}))//url config
app.use(express.static("public"))
app.use(cookieParser())

 



export { app }






//req.params-- url se jb bhi koi data ata h params se ta h
//req.body-- data forms mei aaskta h json mei so we need to do config and kaam hojata hai

//middle use through app.use **




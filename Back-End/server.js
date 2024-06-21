import express from "express"
import cors from "cors"
import user from "./routers/user.js"



const app=express()
const port=3000

// Middleware to parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());


app.use(cors())
app.use('/',user)

app.listen(port,()=>{
    console.log("Server is running on 3000");
})
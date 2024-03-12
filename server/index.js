const express = require("express")
const app = express()
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const cors =require("cors")
const {dbConnection} = require("./database/dbConnection")
const auth = require("./routers/auth")
const addMovie = require("./routers/addMovie") 
dotenv.config()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:"30mb"}))

dbConnection()

const SERVERPOST = process.env.PORT || 5000





app.use("/" , auth)
app.use("/" , addMovie)


app.listen(SERVERPOST , ()=>{
    console.log("server listening")
})
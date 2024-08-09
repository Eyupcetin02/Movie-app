const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
const bodyParser = require("body-parser")
const multer = require("multer")
const path = require("path")
const {dbConnection} = require("./mongoDB/connectDb")
const auth = require("./routers/auth")
const movie = require("./routers/movie")
const swaggerConfig = require("./swagger/swaggerConfig")
dotenv.config()  
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:"30mb"}))
dbConnection()
swaggerConfig(app)






app.use("/" , movie)
app.use("/" , auth) 

const port = process.env.PORT || 5000

app.listen(port , ()=>{
    console.log("server listening for 5000 port");
})

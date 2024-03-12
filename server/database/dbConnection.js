const mongoose = require("mongoose")



const dbConnection = ()=>{
    
        mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
 console.log("db connection sucess")
        })
        .catch(err => console.log(err))
    }


module.exports = {dbConnection}
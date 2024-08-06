const mongoose = require("mongoose")


const schemaAuth = new mongoose.Schema({
    username :{
        type: String,
        required : true,
    },
     email: {
        type: String,
        required : true
     },
     password: {
        type : String,
        required: true
     },
     premium:{
        type: Boolean,
     },
     date:{
        type: Date,
        default: Date.now
     }
})




module.exports =  mongoose.model("authNetflix" , schemaAuth)
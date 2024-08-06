const mongoose = require("mongoose")


const movieSchema = new mongoose.Schema({
    image :{
        type: String,
        required : true,
    },
     title: {
        type: String,
        required : true
     },

})




module.exports =  mongoose.model("movieSchema" , movieSchema)
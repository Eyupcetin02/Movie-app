const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, 
    trim: true, 
  },
  poster_path: {
    type: String, 
   
  },

});

module.exports = mongoose.model("Movie", movieSchema);
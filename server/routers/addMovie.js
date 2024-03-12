const express = require("express")
const router = express.Router()
const {addMovie, getMovie, deleteMovie} = require("../functions/addMovie")



router.post("/addmovie" , addMovie)
router.get("/getmovie" , getMovie)
router.delete("/deletemovie/:id" , deleteMovie)




module.exports = router;
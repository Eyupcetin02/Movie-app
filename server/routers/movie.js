const express = require("express")
const router = express.Router()
const {getMovie , movieFunc} = require("../movie/movieSave")




router.post("/savemovie", movieFunc);

router.get("/getmovie", getMovie);


module.exports = router

const express = require("express")
const router = express.Router()
const {register, userControl , getToken} = require("../auth/usersAuth")


router.post("/register" , register)
router.post("/userControl" , userControl)
router.get("/gettoken" , getToken)
module.exports = router
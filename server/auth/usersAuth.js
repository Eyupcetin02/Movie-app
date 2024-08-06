const mongoose = require("mongoose")
const schemaAuth = require("../mongoDB/authSchema")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const redisClient = require("../redis/redis")

const register = async(req , res)=>{
try{
    const {username , email , password} = req.body
    
    const oldUser =await schemaAuth.findOne({email})

    if(oldUser){
        return res.status(500).json({message:"bu emaili zaten kullaniliyor"})
    }

    if(password.length < 6){
        return res.status(500).json({message: "daha uzun şifre girin"})
    }

    const hashedPassword = await bcrypt.hash(password , 10)

    const newUser = await schemaAuth.create({
        username,
        email,
        password: hashedPassword,
    })


    const token = jwt.sign({id: newUser._id} , process.env.SECRET_KEY , {
        expiresIn: "1h"
    })

    redisClient.SET('token', token, (err, reply) => {
        if (err) {
            console.error('Redis set error:', err);
            res.status(500).send({ error: 'Redis set error' });
        } else {
            console.log('Value set successfully:', reply);
            res.status(200).send({ message: 'Value set successfully' });
        }
    });


    redisClient.SET('user', newUser.email, (err, reply) => {
        if (err) {
            console.error('Redis set error:', err);
            res.status(500).send({ error: 'Redis set error' });
        } else {
            console.log('Value set successfully:', reply);
            res.status(200).json({ message: 'Value set successfully' });
        }
    });

    res.status(200).json({ token: token, status: "OK", user: newUser });
} catch (error) {
  res.status(510).json({ message: error.message});
}
}


const userControl = async(req , res)=>{

    const {email} = req.body

    const oldUser =await schemaAuth.findOne({email})


    if(oldUser){
        return res.json({status : true})
    }
    else{
        return res.json({status: false})
    }

}



const getToken = async(req , res)=>{
    const data = await redisClient.get("token")
    res.status(200).json({data : data})
    }
    
const getUser = async(req, res)=>{
    
    const user = await redisClient.get("user")
    res.status(200).json({user : user})
    
    }



module.exports = {register , userControl , getToken , getUser}
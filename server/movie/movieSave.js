const movieSchema = require("../mongoDB/movieSchema")
const axios = require("axios")

const movieFunc = async(req , res) =>{

const {title , image} = req.body


try {
    const movies = await movieSchema.create({
        title,
        image
    })

    return res.status(200).json({message:"OK" , data:movies})
} catch (error) {
    console.log(error);
    return res.status(503).json({message:"movieFunc hatasi" })

}



}



const getMovie = async(req , res)=>{

try {
  const allMovies = await  movieSchema.find()
  return  res.status(200).json({data:allMovies})
} catch (error) {
    console.log(error);
    return res.status(502).json({message:"getMovie hatasi"})
}


}


module.exports =  {getMovie , movieFunc}
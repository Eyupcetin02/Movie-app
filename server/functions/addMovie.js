const movieSchema = require("../database/movieSchema");

const addMovie = async (req, res) => {
  const { title, poster_path } = req.body;

  const movie = await movieSchema.findOne({ title });

  if (movie) {
    return res.status(500).json({ message: "zaten kayıtlı" });
  }

  const addedMovie = await movieSchema.create({
    title,
    poster_path,
  });

  res.status(200).json({ message: "movie Saved", movie: addedMovie });
};

const getMovie = async (req, res) => {
  const getMovies = await movieSchema.find();

  if (!getMovies) {
    res.status(500).json({ message: "film yok" });
  }

  res.status(200).json({ movies: getMovies });
};


const deleteMovie = async(req , res)=>{

try {
    
    const {id} = req.params

    await movieSchema.findByIdAndDelete(id)

    res.status(200).json({message:"delete"})
} catch (error) {
    console.log(error)
}




}

module.exports = { addMovie, getMovie , deleteMovie };

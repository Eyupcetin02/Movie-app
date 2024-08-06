import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movieHorror: [],
  movieKids : []
};

export const getMoviesKids = createAsyncThunk("getMovieKids", async () => {
  const kids = 16
  const apiKey = "41bb842c1b76a5e9dd3b88d871e2248c";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=tr-TR&with_genres=${kids}&page=1`;

  const { data } = await axios.get(url);
  const filteredData = data.results.filter(movie => movie.overview);
  const firstFiveMovies = filteredData.slice(0, 19);
  
  return firstFiveMovies;
});

export const getMoviesHorror = createAsyncThunk("getMovieHorror", async () => {
  const horror = 27
  const apiKey = "41bb842c1b76a5e9dd3b88d871e2248c";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=tr-TR&with_genres=${horror}&page=1`;

  const { data } = await axios.get(url);
  const filteredData = data.results.filter(movie => movie.overview);
  const firstFiveMovies = filteredData.slice(0, 19);
  return firstFiveMovies;
});

const moviesSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getMoviesKids.fulfilled, (state, action) => {
      state.movieKids = action.payload;
    })
    .addCase(getMoviesHorror.fulfilled , (state , action) =>{
      state.movieHorror = action.payload
    })
  },
});

export default moviesSlice.reducer;

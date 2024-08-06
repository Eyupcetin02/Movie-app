import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    tvComedy : [],
    tvWar : []
}

export const getTvShowFamily = createAsyncThunk("getMovies", async (type) => {
  const comedy = 10751
  const apiKey = "41bb842c1b76a5e9dd3b88d871e2248c";
  const url = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=tr-TR&with_genres=${comedy}&page=1`;

  const { data } = await axios.get(url);
  const filteredData = data.results.filter(movie => movie.overview);
  const firstFiveMovies = filteredData.slice(0, 19);

  return firstFiveMovies;
  });

  export const getTvShowWar = createAsyncThunk("getTvShowPopular" , async () =>{
    const war = 10768
    const apiKey = "41bb842c1b76a5e9dd3b88d871e2248c";
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=tr-TR&with_genres=${war}&page=1`;
  
    const { data } = await axios.get(url);
    const filteredData = data.results.filter(movie => movie.overview);
    const firstFiveMovies = filteredData.slice(0, 19);

    
    return firstFiveMovies;
  })

const TvShowSlice = createSlice({
    name : "TvShowSlice",
    initialState,
    reducers : {},
    extraReducers: (builder) => {
        builder
        .addCase(getTvShowFamily.fulfilled, (state, action) => {
          state.tvComedy = action.payload;
        })
        .addCase(getTvShowWar.fulfilled , (state , action) =>{
          state.tvWar = action.payload
        })
      },
})



export default TvShowSlice.reducer;

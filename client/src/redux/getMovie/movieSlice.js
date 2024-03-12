import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
};

export const getMovies = createAsyncThunk("getMovies", async (search) => {
  const defaultM = "hulk";
  const apiKey = "41bb842c1b76a5e9dd3b88d871e2248c";
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search || defaultM}`;
  const { data } = await axios.get(url);
  return data.results;
});

const moviesSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export default moviesSlice.reducer;

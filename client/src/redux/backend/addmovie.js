import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie:[],
};

export const addMovie = createAsyncThunk("addMovie", async (movie) => {
  try {
    console.log(initialState.movie);
    const response = await axios.post("http://localhost:5000/addmovie", movie);
  } catch (error) {
    console.log(error);
  }
});

export const getMovie = createAsyncThunk("getMovie", async () => {
  try {
    const response = await axios.get("http://localhost:5000/getmovie");
    return response.data.movies;
  } catch (error) {
    console.log(error);
  }
});

export const deleteMovie = createAsyncThunk("deleteMovie", async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/deletemovie/${id}`
    );
    return id
  } catch (error) {
    console.log(error);
  }
});

const addMovieSlice = createSlice({
  name: "addmovie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovie.fulfilled, (state, action) => {
      return {
        ...state,
        movie: action.payload,
      };
    })
    .addCase(deleteMovie.fulfilled , (state , action) =>{
        state.movie = state.movie.filter(item => item.id !== action.payload)
    })
    .addCase(addMovie.fulfilled , (state , action)=>{
      state.movie.push(action.payload)
    })
  },
});

export default addMovieSlice.reducer;

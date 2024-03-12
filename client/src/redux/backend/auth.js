import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: { username: "", email: "", password: "" },
  status: "idle",
  error: null,
};

export const authregister = createAsyncThunk("auth/authregister", async (user) => {
    try {
      const response = await axios.post("http://localhost:5000/register", user);
      console.log(response.data)
      window.localStorage.setItem("token" , response.data.token)
      window.location = "/home"
      return response.data;
      
    } catch (error) {
      throw error.response.data;
    }
  });


  export const authLogin = createAsyncThunk("authLogin" , async(user)=>{
    try {

      const response = await axios.post("http://localhost:5000/login", user)
      window.localStorage.setItem("token" , response.data.token)
      window.location = "/home"
    } catch (error) {
      console.log(error)
    }
  })


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: async(state, action) => {
        
    },
    login: () => {
   
    },
    logout: () => {
      
    },
  },
});

export const { register, login, logout } = authSlice.actions;

export default authSlice.reducer;

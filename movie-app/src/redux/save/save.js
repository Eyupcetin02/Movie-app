import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
save : []
}

export const registerUser = createAsyncThunk ("registerSlice",async(data)=>{

    try {
        console.log("data" , data);

     const registered = await axios.post("http://localhost:5000/savemovie" , data)

    } catch (error) {
        console.log(error);
    }
    
   

})

const saveSlice = createSlice({
    name:"saveSlice",
    initialState,
    reducers:{ saveFunc: (state, action) => {
            
            state.save.push(action.payload);
        }},
    
    
})


export const { saveFunc } = saveSlice.actions;

export default saveSlice.reducer
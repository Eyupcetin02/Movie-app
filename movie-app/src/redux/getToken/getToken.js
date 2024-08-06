import {createSlice , createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    token : ""
}




export const getToken = createAsyncThunk ("registerSlice",async()=>{

    const registered = await axios.get("http://localhost:5000/gettoken")

    console.log("registred" , registered);

    try {
        console.log(registered);
    } catch (error) {
        console.log("storage error" , error);
    }

    return registered
   

})





const tokenSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(getToken.fulfilled , (state, action) => {
            state.authData = action.payload
          })
    }
})



export default tokenSlice.reducer;

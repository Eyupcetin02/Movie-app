import {createSlice , createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    authData : ""
}



export const registerUser = createAsyncThunk ("registerSlice",async(data)=>{

    console.log("data" , data);

    const registered = await axios.post("http://localhost:5000/register" , data)

    console.log("registred" , registered.data.user);

    try {
        const authDatas = registered.data.user
        localStorage.setItem("email" , JSON.stringify(authDatas.email))
        localStorage.setItem("date" , JSON.stringify(authDatas.date))
        localStorage.setItem("id" , JSON.stringify(authDatas._id))
    } catch (error) {
        console.log("storage error" , error);
    }

    return registered.data.user
   

})



const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(registerUser.fulfilled , (state, action) => {
            state.authData = action.payload
          })
    }
})



export default authSlice.reducer;

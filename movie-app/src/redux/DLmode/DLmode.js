import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    mode : true
}


const modeSlice = createSlice({
    name:"mode",
    initialState,
    reducers:{
        modeon : (state )=>{
            state.mode = !state.mode
        }
    }
})




export const {modeon} = modeSlice.actions
export default modeSlice.reducer
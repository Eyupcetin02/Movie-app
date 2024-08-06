import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modal : false,
    info : {
       
    }

}

const modalSlice = createSlice({
    name : "modal",
    initialState,
    reducers:{
        getInfo : (state , action)=>{
            state.info= action.payload;
        },
        modalType : (state , action)=>{
            state.modal = action.payload
        }
    }
})



export const {getInfo , modalType} = modalSlice.actions
export default modalSlice.reducer
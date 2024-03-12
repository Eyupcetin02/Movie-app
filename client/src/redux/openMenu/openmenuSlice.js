import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: false,
};

const openMenuSlice = createSlice({
  name: "openMenu",
  initialState,
  reducers:{
    setMenu: (state,action) => {
        state.menu = action.payload;
      },
  }
});

export const { setMenu } = openMenuSlice.actions;
export default openMenuSlice.reducer;

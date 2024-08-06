import {configureStore} from "@reduxjs/toolkit"
import getMovieSlice from "./getMovie/getMovieSlice";
import modeSlice from "./DLmode/DLmode"
import modalSlice from "./movieModal/modal";
import TvShowSlice from "./getMovie/getTvShowSlice";
import authSlice from "./auth/auth"
import saveSlice from "./save/save";
import tokenSlice from "./getToken/getToken"
const store = configureStore({

    reducer:{
        movies : getMovieSlice,
        tv : TvShowSlice,
        mode : modeSlice,
        modal : modalSlice,
        info : modalSlice,
        save : saveSlice,
        auth : authSlice,
        token : tokenSlice,
       
    }
})



export default store;
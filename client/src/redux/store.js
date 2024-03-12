import {configureStore} from "@reduxjs/toolkit"
import movieSlice from "./getMovie/movieSlice";
import searchSlice from "./search/search";
import openmenuSlice from "./openMenu/openmenuSlice";
import auth from "./backend/auth";
import addMovieSlice from "./backend/addmovie";
const store = configureStore({

    reducer:{
        movies : movieSlice,
        search : searchSlice,
        menu : openmenuSlice,
        user : auth,
        movie : addMovieSlice,

    }


})



export default store;
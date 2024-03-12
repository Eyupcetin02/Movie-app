import React from "react";
import { useState, useEffect } from "react";
import {useDispatch , useSelector} from "react-redux"
import "../styles/content.css";
import axios from "axios";
import { getMovies } from "../redux/getMovie/movieSlice";
import {addMovie} from "../redux/backend/addmovie"
const Content = () => {



const dispatch = useDispatch()
const {movies} = useSelector(state => state.movies)
const {search} = useSelector(state => state.search)

  useEffect(()=>{
    try {
      dispatch(getMovies(search))
      
  
    } catch (error) {
      console.log(error)
    }
  } , [search])

  
  const serc = "https://image.tmdb.org/t/p/w500/"

  return (
    <div className="content-container">
      {movies.map((item, index) => (
        <div key={index} name={index} className="container">
          <h3>{item.title}</h3>
          <img
            src={serc + item.poster_path}
            alt=""
            
          />
          <p>{item.overview}</p>
          
          <div className="content-button">
            <button onClick={()=>dispatch(addMovie(item))} >Add</button>
            
          </div>
        </div>
      ))}

      
    </div>
  );
};

export default Content;

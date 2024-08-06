import React, { useEffect, useRef, useState } from 'react';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { FaCircleInfo, FaCirclePlay } from 'react-icons/fa6';
import { FaBookmark } from "react-icons/fa";
import { IoMdAddCircle   } from "react-icons/io";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesHorror } from '../../../redux/getMovie/getMovieSlice';
import { getInfo, modalType } from '../../../redux/movieModal/modal';
import { registerUser, saveFunc } from '../../../redux/save/save';

const MovieHorror = ({setInfo}) => {

    
  const dispatch = useDispatch()
  const movieHorror = useSelector(state => state.movies.movieHorror)
  const {save} = useSelector(state => state.save)

  const serc = "https://image.tmdb.org/t/p/w500/"
  const movieListRef = useRef(null);
  const [clickCounts, setClickCounts] = useState(0);




  useEffect(()=>{
    try{
      dispatch(getMoviesHorror())
    }
    catch{
      console.log("error");
    }
  } , [])


  const getimg = (item)=>{

    setInfo({img : `${serc + item.backdrop_path}` , desc : item.overview})
    document.querySelector('#content-wrapper').scrollIntoView({ behavior: 'smooth' })
  }


  const modalInfo = (item)=>{
    dispatch(modalType(true))
    dispatch(getInfo({
      desc : item.overview,
      img : serc + item.poster_path,
      title : item.title
    }))

  }


  const handleScroll = () => {
    if (clickCounts < (movieHorror.length -3)) {
      console.log(movieListRef.current);
      const transformValue = -435 * (clickCounts + 1);
      movieListRef.current.style.transform = `translateX(${transformValue}px)`;
      setClickCounts((prevCount) => prevCount + 1);
      console.log(clickCounts);
    }
    else{
      movieListRef.current.style.transform = "translateX(0)";
      setClickCounts(0)
    }
  };

  const handleScrollBack = () => {
    if (clickCounts > 0) {
      const transformValue = -435 * (clickCounts - 1);
      movieListRef.current.style.transform = `translateX(${transformValue}px)`;
      setClickCounts((prevCount) => prevCount - 1);
    }
  };

  const arrowStyle = {
    display: clickCounts === 0 ? "none" : "block"
  };

  return (

    <div className="movie-list-wrapper">
      <ul className="movie-list" ref={movieListRef}>

        {movieHorror.map((item , index)=>(
          <li className="movie-item" key={index}>
          <img className="movie-item-img" src={serc + item.backdrop_path} alt="" />
          <div className="movie-item-info">
            <span className="movie-item-title">{item.title}</span>
            <div className="movie-item-buttons">
              <button onClick={()=>{getimg(item)}}><FaCirclePlay href='#content-wrapper' className='movie-item-buttons-i'/></button>
              <button title='info' onClick={()=>{modalInfo(item)}}><FaCircleInfo className='movie-item-buttons-i'/></button>
              <button onClick={()=>{dispatch(registerUser({title : item.title  , image:serc+item.backdrop_path})) ; console.log(save)}}><FaBookmark  className='movie-item-buttons-i'/></button>
            </div>
          </div>
        </li>
        ))}
      </ul>
      <MdOutlineArrowBackIos onClick={handleScrollBack} style={arrowStyle} className='arrow-back'/>
      <MdOutlineArrowForwardIos className='arrow' onClick={handleScroll} style={{color:"white" , fontSize:55 , cursor:"pointer"}}/>

    </div>
);
}

export default MovieHorror;

import React, { useEffect, useState } from 'react';
import { FaCirclePlay } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import MovieKids from './collections/MovieKids';
import TvShowWar from './collections/TvShowWar';
import MovieHorror from './collections/MovieHorror';
import TvShowComedy from './collections/TvShowComedy';
import Navbar from './Navbar';



const Contents = () => {

  const {mode} = useSelector(state => state.mode)
  const [info , setInfo] = useState({img : "https://tr.web.img4.acsta.net/pictures/210/562/21056253_20131108151938568.jpg" , desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, totam consequuntur iusto cumque excepturi laudantium necessitatibus sunt voluptates vitae fugiat autem soluta animi inventore est modi debitis nam cupiditate magni veritatis! At tenetur, mollitia nulla impedit doloribus ab beatae consectetur ad eveniet sequi maiores necessitatibus ipsa nemo saepe veniam laboriosam!"})
  const [filter , setFilter] = useState("hepsi")
  const [textColor, setTextColor] = useState('#000'); 
  const filterChange = (e)=>{
    setFilter(e.target.value)
    
  }



  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'Anonymous'; 
    img.src = info.img;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      let r = 0, g = 0, b = 0;

      for (let i = 0; i < pixels.length; i += 4) {
        r += pixels[i];
        g += pixels[i + 1];
        b += pixels[i + 2];
      }

      const pixelCount = pixels.length / 4;
      r = Math.floor(r / pixelCount);
      g = Math.floor(g / pixelCount);
      b = Math.floor(b / pixelCount);

      
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      const newTextColor = brightness > 125 ? '#000' : '#fff'; 

      setTextColor(newTextColor);
    };
  }, [info]);





    return (
        <div className={mode ? "container" : "container-active"}> 
        <div className="content-wrapper" id="content-wrapper">
        {/* <div className='featured-items'> */}
        <div className="featured-content" id="featured-content" style={{backgroundImage:`url(${info.img})`}}>
        <Navbar textcolor={textColor} setFilter={setFilter}/>
        <p className={mode ? "featured-desc" : "featured-desc-active"}>
            {info.desc}
          </p>
          <div className="featured-buttons">
            <button className="play-button">
            <FaCirclePlay/> Oynat
            </button>
            <button className="info-button">
              <i className="bi bi-info-circle"></i> Daha Fazla Bilgi
            </button>
          </div>
        {/* </div> */}
         
        </div>
       
      </div>
      {/* <div className="movie-list-filter">
        <select onChange={filterChange} name="" id="" className="filter">
          <option value="hepsi">Hepsi</option>
          <option value="Dizi">Diziler</option>
          <option value="Film">Filmler</option>
        </select>
      </div> */}


      <div className="movie-list-conteiner">
      {filter === 'hepsi' || filter === 'Dizi' ? (
          <>
            <h1 className="movie-list-title">Aile</h1>
            <TvShowComedy setInfo={setInfo}/>
          </>
        ) : null}

        {filter === 'hepsi' || filter === 'Film' ? (
          <>
            <h1 className="movie-list-title">Korku</h1>
            <MovieHorror setInfo={setInfo}/>
          </>
        ) : null}

        {filter === 'hepsi' || filter === 'Dizi' ? (
          <>
            <h1 className="movie-list-title">Savaş</h1>
            <TvShowWar setInfo={setInfo}/> 
          </>
        ) : null}

        {filter === 'hepsi' || filter === 'Film' ? (
          <>
            <h1 className="movie-list-title">Çocuk</h1>
            <MovieKids setInfo={setInfo}/>
          </>
        ) : null}
      </div>
      
        </div>
    );
}

export default Contents;

import React, { useEffect, useState } from 'react';
import "../../styles/shoppingcart.css"
import Navbar from "../Navbar"
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovie, getMovie } from '../../redux/backend/addmovie';
const ShoppingCart = () => {

    const dispatch = useDispatch()
    const {search} = useSelector(state => state.search)
    const [filterCart , setFilterCart] = useState([])
    const {movie} = useSelector(state=>state.movie)




useEffect(()=>{
dispatch(getMovie())
}, [dispatch])
    
 useEffect(()=>{

const filteritems = movie
setFilterCart(filteritems)
 },[movie])


 
    return (
       
        <div className='content-container'>
            <Navbar/>
           
            {filterCart.map((item,index)=>(
                <div key={index} className='container'>

                    <h3>{item.title}</h3>
                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
                <div className='content-button'>
                    <button onClick={()=>dispatch(deleteMovie(item._id)).then(()=>dispatch(getMovie()))}>delete</button>
                </div>
                </div>
                
                
            ))}
               
        </div>
    );
}

export default ShoppingCart;

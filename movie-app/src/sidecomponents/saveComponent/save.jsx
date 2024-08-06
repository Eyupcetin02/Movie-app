import React, { useEffect, useState } from 'react';
import {useDispatch , useSelector} from "react-redux"
import "./save.css"
import { GoSearch } from 'react-icons/go';
import { IoHome, IoSunnySharp } from 'react-icons/io5';
import { IoIosListBox } from "react-icons/io";
import { BsBoundingBox } from "react-icons/bs";
import { FaMoon } from 'react-icons/fa';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import axios from "axios"
import { IoMenuSharp } from "react-icons/io5";



const Save = () => {

const [state , setState] = useState([])
const [row , setRow] = useState(true)
const [sidebar , setSidebar] = useState(false)


useEffect(()=>{
    const getMovies = async()=>{
        try {
            const allMovies = await axios.get("http://localhost:5000/getmovie");
            console.log("allMovies", allMovies.data.data);
            setState(allMovies.data.data);
            console.log(state);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    }
    getMovies()

},[])

const style = {
    flexWrap: row ? "nowrap" : "wrap",
    flexDirection: row ? "column" : "row"
  };
  
const sideBarStyle = {
    display: sidebar ? "flex" : "none"
}

const menuStyle = {
    color: sidebar ? "white" : "white"
}
  

    return (
        <div className='save-container'>
            <IoMenuSharp style={menuStyle} onClick={()=>setSidebar(!sidebar)} className='save-menu'/>
                

            <div style={sideBarStyle} className='save-page-sidebar'>
            <GoSearch className={'sidebar-i'}/>
            <IoHome onClick={()=> window.location = "/homePage"} className={'sidebar-i'}/>
            <IoIosListBox onClick={()=>setRow(true)} className={'sidebar-i'}/>
            <BsBoundingBox onClick={()=>setRow(false)} className={'sidebar-i'}/>
            <FaMoon className={'sidebar-i'}/>
            <IoSunnySharp className={'sidebar-i'}/>
            <IoArrowBackCircleSharp onClick={()=> window.location = "/homePage"} className={'sidebar-i'}/>

            </div>

            <div className='save-wrapper' style={style}>
                 {state.map((item , index)=>(
                    <div key={index} className='save-item'>
                    <h2>{item.title}</h2> 
                    <img src={item.image}alt="" />                       
                    <button className='save-delete-button'>delete</button>
                </div>

                ))  } 
            </div>
        </div>
    );
}

export default Save;



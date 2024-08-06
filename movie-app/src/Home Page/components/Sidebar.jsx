import React from 'react';
import { GoSearch } from "react-icons/go";
import { IoHome , IoSettingsSharp  } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { FaHourglassHalf } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { useSelector } from 'react-redux';


const Sidebar = () => {
  const {mode} = useSelector(state => state.mode)

    return (
        <div className={mode ? "sidebar" : "sidebar-active"}>
      <GoSearch className={mode ? 'sidebar-i' : "sidebar-i-active"}/>
      <IoHome onClick={()=>document.querySelector('#content-wrapper').scrollIntoView({ behavior: 'smooth' })} className={mode ? 'sidebar-i' : "sidebar-i-active"}/>
      <FaBookmark onClick={()=>window.location = "/save"} className={mode ? 'sidebar-i' : "sidebar-i-active"}/>
      <FaHourglassHalf className={mode ? 'sidebar-i' : "sidebar-i-active"}/>
      <LuShoppingCart onClick={()=>{window.location = "/shopping"}} className={mode ? 'sidebar-i' : "sidebar-i-active"}/>
      <IoSettingsSharp onClick={()=>window.location= "/settings"} className={mode ? 'sidebar-i' : "sidebar-i-active"}/>
    </div>
    );
}

export default Sidebar;

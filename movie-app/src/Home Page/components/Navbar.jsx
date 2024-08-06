import React, { useState } from 'react';
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { useDispatch , useSelector } from 'react-redux';
import { modeon } from '../../redux/DLmode/DLmode';
import { GoSearch } from 'react-icons/go';
import { IoMdNotifications } from "react-icons/io";


const Navbar = ({setFilter , textcolor}) => {
  const dispatch = useDispatch()
  const {mode} = useSelector(state => state.mode)
  const [search , setSearch] = useState(false)


  const modeFuntion = ()=>{
  dispatch(modeon())
  console.log(mode);
  }

  const style = {
    display: search ? "block" : "none"
  }

    return (
        
            <div className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-left">
        <img
          className="login-logoo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
         <ul className='navbar-list' style={{color:textcolor}}>
            <li onClick={()=>window.location = "save"}>library</li>
            <li onClick={()=>window.location = "shopping"}>Shopping</li>
            <li onClick={()=>setFilter("hepsi")}>Popular</li>
            <li onClick={()=>setFilter("Film")}>Movies</li>
            <li onClick={()=>setFilter("Dizi")}>Tv Shows</li>
            <li onClick={()=>window.location = "settings"}>Settings</li>
         </ul>
        </div>

        <div className="menu-container">
           
          {/* <input type="text" name="" id="searh-input" className="searh-input" placeholder="Filim Arayın..."/> */}
        </div>
        <div className="profile-container" id="profile-container">
          <input style={style} placeholder='search...' type="text" className='navbar-input' />
        <GoSearch onClick={()=> setSearch(!search)} className={mode ? 'sidebar-i' : "sidebar-i-active"}/>
          <div>kids</div>
          <IoMdNotifications/>
        <select name="user" className="user">
              <option value="eyup">img</option>
              <option value="burçak">Emly</option>
              <option value="furkan">Furkan</option>
              <option value="emma">Emma</option>
            </select>
          {/* <div className="profile-text-container">
            <div className={mode ? "toggle" : "toggle-active"}>
              <FaMoon color='goldenrod'/>
              <IoSunnySharp color='goldenrod'/>
              <div onClick={modeFuntion} className={mode ? "toggle-ball" : "toggle-ball-active"}></div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    );
}

export default Navbar;

import React, { useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import "../styles/navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/search/search";
import { setMenu } from "../redux/openMenu/openmenuSlice";
const Navbar = () => {

const dispatch = useDispatch()

const {search} = useSelector(state => state.search)
const {menu} = useSelector(state => state.menu)
const handleImputChange = (e) =>{
  const imputvalue = e.target.value
  dispatch(setSearch(imputvalue))
}

useEffect(()=>{
  console.log(menu)
})

console.log(search)

  return (
    <div className="nav-container nav-item">
      <div className="nav-icon">
        <IoMdMenu
          style={{
            fontSize: "24px",
            color: menu ? "black" : "white",
            cursor: "pointer",
          }}
          onClick={() => dispatch(setMenu(!menu))}
        />
      </div>
      <div className="nav-input nav-item">
        <div className="inputDiv">
          <BsSearch style={{ color: "black", marginLeft: "15px" }} />
          <input
            type="text"
            placeholder="search"
            onChange={(e) => {
              
                handleImputChange(e);
  
            }}
          />
        </div>
      </div>
      <div className="nav-users nav-item">
        <div className="notification nav-item-item">
          
          
        </div>
        <div className="profile nav-item-item">
          <CgProfile style={{ color: "white ", fontSize: "25px" }} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import "../styles/menu.css";
import { LuShoppingCart } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
const Menu = () => {
  return (
   
      <div className="menu-container">
        <div className="menu-basket menu-card">
          <Link style={{textDecoration:"none" , color:"black"}} to="/shoppingcart">
            <p>
              <LuShoppingCart /> Your card
            </p>
          </Link>
        </div>
        <div className="menu-settings menu-card">
          <p>
            <IoMdSettings /> Settings
          </p>
        </div>
        <div className="menu-profile menu-card">
          <p>
            <CgProfile /> Profile
          </p>
        </div>

        
      </div>
    
  );
};

export default Menu;

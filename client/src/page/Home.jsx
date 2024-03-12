import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Content from "./Content";
import { useSelector } from "react-redux";
const Home = ({openMenu, setOpenMenu}) => {

  
 
  
  return (
    <div>
      <Navbar
        setOpenMenu={setOpenMenu}
        openMenu={openMenu}
          
      />
      

      <Content        
    
      />
      <div></div>
      
    </div>
  );
};

export default Home;

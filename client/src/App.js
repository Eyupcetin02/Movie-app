import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link , Routes} from 'react-router-dom';
import Home from './page/Home';
import Auth from './auth/Auth';
import ShoppingCart from './page/menuCarts/ShoppingCart';
import { useSelector } from 'react-redux';
import Menu from './page/Menu';
import UseToken from './token/getToken';
const App = () => {
  const [token] = UseToken()
  const {menu} = useSelector(state => state.menu)
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Auth />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/shoppingcart' element={<ShoppingCart/>}/>
        
      </Routes>
      {menu && <Menu />}
    </Router>
  );
}

export default App;

import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import UserLoginPage from './User Login Page/userLoginPage';
import HomePage from './Home Page/HomePage';
import Login from './Login Page/loginPage';
import Shopping from './sidecomponents/shoppingComp/shopping';
import Settings from './sidecomponents/settingsComp/settings';
import Save from './sidecomponents/saveComponent/save';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/auth" element={<UserLoginPage />} />
        <Route path='/homePage' element={<HomePage/>}/>
        <Route path='/shopping' element={<Shopping/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/save' element={<Save/>}/>


      </Routes>
    </Router>
  );
};

export default App;

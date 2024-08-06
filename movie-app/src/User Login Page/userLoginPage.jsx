import React, { useState } from 'react';
import "./userLoginPage.css"
import { registerUser } from '../redux/auth/auth';
import { useDispatch, useSelector } from 'react-redux';

const UserLoginPage = () => {

    const [state, setState] = useState({username : "" , email: "" , password : ""});
    const [register , setRegister] = useState(false) 
    const {auth} = useDispatch(state => state.auth)
    const dispatch = useDispatch()

    const onChangeFunc = (e)=>{
      setState({...state , [e.target.name]  : e.target.value})
  }


  const handleSubmit = (e) => {
    try {
      dispatch(registerUser(state))
      
      window.location = "/homePage"
      e.preventDefault()
    } catch (error) {
      console.log(error);
    }
  };





  
    return (
        <div className='login-parent-container'>
        <div className="login-container">
      <h2>{register ? "Netflix'e kayit olun" : "Netflix'e Giriş Yapin"}</h2>
      <form className='user-login-form' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Kullanici Adi"
          name='username'
          value={state.username}
          onChange={onChangeFunc}
          
        />
        {register && <input type='email'
         placeholder='e-mail'
         name='email'
         value={state.email}
         onChange={onChangeFunc}
         
         />}


        <input
          type="password"
          placeholder="Şifre"
          name='password'
          value={state.password}
          onChange={onChangeFunc}
          
        />
        <button className='userlogin-button' type="submit">{register ? "Kayit ol" : "Giriş Yap"}</button>
      </form>
      <p>{register ? "Hesabınız varmı?" : "Hesabiniz yok mu?"} <a href="#" onClick={()=> {setRegister(!register) ; console.log(register)}}>{register ? "giriş yapin." : "Şimdi kayit olun."}</a></p>
    </div>
    </div>
    );
}

export default UserLoginPage;

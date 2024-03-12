import React, { useState } from 'react';
import "./auth.css"
import { useDispatch } from 'react-redux';
import { authregister , authLogin } from '../redux/backend/auth';
const Auth = () => {
    const dispatch = useDispatch()
  
    const [authData , setAuthData] = useState({username:"", email:"",password:""})
    const [sign , setSign] = useState(false)
    const onChangeFunc = (e)=>{
        setAuthData({...authData , [e.target.name]  : e.target.value})
        console.log(authData)
    }

    const authFunction = ()=>{
        try {
            dispatch(authregister(authData))
        } catch (error) {
            console.log(error)
        }
    }

    const loginFunction = ()=>{
        try {
            dispatch(authLogin(authData))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='parentAuthcontainer'>
            <div className='Authcontainer'>
                <div className='childContainer'>
                    <input type="text" name='username' value={authData.username} onChange={onChangeFunc} placeholder='username' />
                    <input type="text" name='email' value={authData.email} onChange={onChangeFunc} placeholder='email' />
                    <input type="text" name='password' value={authData.password} onChange={onChangeFunc} placeholder='password' />
                    <div onClick={()=>setSign(!sign)}>or sign</div>
                    <div className='button' onClick={authFunction}>
                    
                    {sign ? <span onClick={authFunction}>sign</span> : <span onClick={loginFunction}>login</span>}
                    
                    
                    
                    </div>   
                </div>
                       
            </div>
        </div>
    );
}

export default Auth;

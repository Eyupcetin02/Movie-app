import React, { useState } from 'react';
import "./settings.css"
import {useSelector} from "react-redux"
import { IoLibrary , IoLeafSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

const Settings = () => {


    const {auth} = useSelector(state => state.auth)

    const id = localStorage.getItem("id")
    const email = localStorage.getItem("email")
    const date = localStorage.getItem("date")
    
    const [isChecked, setIsChecked] = useState(true);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

   
    
    return (
        <div className='settings-container'> 
        <div className='settings-header'>
         <div className="settings-header-left">
            <div className="settings-header-icon">
            <IoLeafSharp/>Atlas
            </div>
            <div className="settings-header-select">
                <IoLibrary/>
                User's Org-...
                <div className="settings-header-select-settings">
                    <IoMdSettings/>
                </div>
            </div>
            <select name="" id="" className='accsess-manager'>
                <option value="">Accsess Manager</option>
            </select>
            <div>
                Billing
            </div>

         </div>
         <div className="settings-header-right">
            <div>All Clusters</div>
            <select name="" id="" className="settings-header-first-select">
                <option value="">Get Help</option>
            </select>
            <div className='select-div'>
            <select name="" id="" className="settings-header-second-select">
                <option value="">secenek</option>
            </select>
            </div>
           
         </div>
        </div>
        <div className="settings-sidebar">
            
            <ul className='settings-list-ul'>
                <li className="settings-list-info"><IoLibrary/>ORGANIZATION</li>
                <li className="settings-list">Projects</li>
                <li className="settings-list">Alerts</li>
                <li className="settings-list">Activity Feed</li>
                <li className="settings-list">Settings</li>
                <li className="settings-list">Integrations</li>
                <li className="settings-list">Access Manager</li>
                <li className="settings-list">Billing</li>
                <li className="settings-list">Support</li>
                <li className="settings-list">Live Migration</li>
            </ul>


        </div>
        <div className="setting-desc">
        <h1 className='organization-h1'>Organization Settings</h1>
        </div>
            <div className='settings-userinfo'>
                    <div className="info-settings">
                        <h3>Organization ID</h3>
                        <p>{id}</p>
                    </div>
                    <div className="info-settings">
                        <h3>Organization email</h3>
                        <p>{email}</p>
                    </div>
                    <div className="info-settings">
                        <h3>Created On</h3>
                        <p>{date}</p>
                    </div>
            </div>

            <div className="settings-body">
                <div className='settings-item'>
                    <div className='settings-item-header'>
                        <h2>Delete Organization</h2>
                        <button className='settings-button' onClick={()=>console.log(auth)}>Delete</button>
                    </div>
                    <div className='settings-item-body'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, ab?
                    </div>
                </div>

                <div className='settings-item'>
                    <div className='settings-item-header'>
                        <h2>Dark Mode</h2>
                        <div className= "settings-toggle">
                            <div className="settings-toggle-ball" >
                                 <label className="switch">
                                     <input type="checkbox" checked={isChecked} onChange={handleToggle} />
                                     <span className="slider"></span>
                                 </label>
                            </div>
                        </div>
                    </div>
                    <div className='settings-item-body'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, ab?
                    </div>
                </div>

                <div className='settings-item'>
                    <div className='settings-item-header'>
                        <h2>E-posta Doğrulama</h2>
                        <button className='settings-button'>Doğrula</button>
                    </div>
                    <div className='settings-item-body'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, ab?
                    </div>
                </div>

                <div className='settings-item'>
                    <div className='settings-item-header'>
                        <h2>E-posta Doğrulama</h2>
                        <button className='settings-button'>Doğrula</button>
                    </div>
                    <div className='settings-item-body'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, ab?
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;

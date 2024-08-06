import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { modalType } from '../../redux/movieModal/modal';
import "./modal.css"


const Modal = () => {
    const dispatch = useDispatch()
    const {info} = useSelector(state => state.info)

    return (
        <div className='modal-container'>
        <div className='modal-content'>
            <div className='modal-header'>
                {<h1 className='modal-title'> {info.title} </h1> }
                <AiOutlineClose 
                    onClick={() => { dispatch(modalType(false)) ; console.log(info);}} 
                    size={25} 
                    className='modal-close' 
                />
            </div>
            <div className='modal-body'>
                
                <img className='modal-img' src={info.img} alt="" />

                
                <p className='modal-desc'>{info.desc}</p>
                
            </div>
        </div>
    </div>
    );
}

export default Modal;

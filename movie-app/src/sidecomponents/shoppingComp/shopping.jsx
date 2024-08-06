import React from 'react';
import "./shopping.css"
const Shopping = () => {

    const list = [
        {
            title:"Ücretsiz",
            price:"0$",
            childTitle:"/sınırsız",
            // desc:"lorem10",
            list:["Film izleme","Film Beğenme"]
        },
        {
            title:"Deneme",
            price:"19.99$",
            childTitle:"/Aylık",
            // desc:"lorem10",
            list:["Film izleme","Film Beğenme","Film kayit etme","Film gönderme"]
        }, {
            title:"Premium",
            price:"109.99$",
            childTitle:"/yıllık",
            // desc:"lorem10",
            list:["Film izleme","Film Beğenme","Film kayit etme","Film gönderme","Film indirme" , "internetsiz erişim"]
        }
    ]






    return (
        <div className='shopping-container'>

            <div className='shopping-nav'>
                <div className='shopping-nav-logo'>
                    {/* Netflix */}
                </div>
                <div className='shopping-nav-button'>
                    <button className='shopping-back-button' onClick={()=>{window.location = "/homePage"}}>Geri dön</button>
                </div>
            </div>
            <div className='shopping-wrapper'>
               {list.map((item , index)=>(
                 <div key={index} className='shopping-cart'>
                 <div className='shopping-cart-header'>
                     <div className='shopping-cart-header-head'><h2>{item.title}</h2></div>
                     <div className='shopping-cart-header-body'><h1>{item.price}</h1><p>{item.childTitle}</p></div>
                 </div>
                 <div className='shopping-line'></div>
                 <div className='shopping-cart-body'>
                     <div className='shopping-cart-body-p'>
                         <p>{item.desc}</p>
                     </div>
                     <div className='shopping-cart-body-list'>
                         <ul className='shopping-cart-body-list-ul'>
                             {item.list.map((i , ind)=>(
                                <li key={ind}>
                                    {i}
                                </li>
                             ))}
                         </ul>
                     </div>
                     <div className='button-div-cart'>
                         <button className='shopping-apply-button'>apply</button>
                     </div>
                 </div>
             </div>
               ))}
            </div>
        </div>
    );
}

export default Shopping;

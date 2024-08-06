import React, { useState } from 'react';
import './Login.css';
import axios from "axios"
import Accordion from './acordionComponent/AccordionComp';

function Login() {

  const items = [
    { title: 'Netflix nedir?', content: 'Netflix; internet bağlantılı binlerce cihazda ödüllü diziler, filmler, animeler, belgeseller ve daha fazlasını içeren geniş bir arşiv sunan bir streaming hizmetidir.' },
    { title: "Netflixin maliyeti nedir?", content: 'Netflix i akıllı telefonunuz, tabletiniz, Akıllı TV niz, dizüstü bilgisayarınız veya yayın cihazınızda sabit bir aylık ücretle izleyin. Aylık plan ücretleri 119,99 TL ile 229,99 TL arasında değişmektedir. Ekstra maliyet yok, sözleşme yok.' },
    { title: 'Nerede izleyebilirim?', content: "İstediğiniz yerde, istediğiniz zaman izleyin. Bilgisayarınızda netflix.com adresinden veya akıllı TV'ler, akıllı telefonlar, tabletler, medya oynatıcılar ve oyun konsolları dâhil Netflix uygulamasını sunan, internet bağlantılı herhangi bir cihazda anında izlemek için Netflix hesabınızla oturum açın." },
    { title: 'Nasıl iptal ederim?', content: "Netflix esnektir. Sinir bozucu hiçbir sözleşme ve taahhüt yoktur. Hesabınızı çevrimiçi olarak iki tıklamayla kolayca iptal edebilirsiniz. İptal ücreti yoktur - hesabınızı istediğiniz zaman başlatın veya durdurun." },
    { title: 'Netflix te ne izleyebilirim?', content: "Netflix, uzun metrajlı filmler, belgeseller, diziler ve programlar, anime, ödüllü Netflix orijinal içerikleri ve daha fazlasından oluşan kapsamlı bir kütüphaneye sahiptir. İstediğiniz her zaman, istediğiniz kadar çok şey izleyin." },
    { title: 'Netflix çocuklar için uygun mudur?', content: "Üyeliğinize dâhil olan Netflix Çocuk deneyimi, çocukların ailece izlenebilecek dizi ve filmleri kendilerine özel bir alanda izlemelerini sağlarken kontrolü ebeveynlere verir." }
  ];


    const [state , setState] = useState("")
    const [status , setStatus] = useState(false)

    const handleClik = (e) => {
        e.preventDefault();
    
        window.location = "/auth"
      };

      const userControl = async(e)=>{
        setState(e.target.value)
        
        const control =await axios.post("http://localhost:5000/userControl" , {email:state})
       if(control.data.status){
        setStatus(true)
       }
       else{
        setStatus(false)
       }
      }

      const styleInput = {
        border: status ? '2px solid green' : '2px solid red'
    };
  return (
    <div className="login">
      <div className="login-background">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
        <button className="login-button" onClick={handleClik}>Oturum Aç</button>
        <div className="login-gradient" />
      </div>

      <div className="login-body">
        <h1>Sınırsız film, dizi ve çok daha fazlası</h1>
        <h2>İstediğiniz yerde izleyin. İstediğiniz zaman iptal edin.</h2>
        <h3>İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak için tek yapmanız gereken e-posta adresinizi girmek.</h3>

        <div className="login__input">
          
            <input onChange={userControl} style={styleInput} className='login-input' type="email" placeholder="E-posta adresi" />
            <button onClick={userControl} className="login-getStarted">Başlayın</button>
        </div>
      </div>
      <Accordion items={items}/>
    </div>
  );
}

export default Login;

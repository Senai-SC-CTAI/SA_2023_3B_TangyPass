import React from 'react'
import { Link } from 'react-router-dom'
import './Qrcode.css'
import axios from 'axios';
import {QRCodeSVG} from 'qrcode.react';
import { useState,useEffect } from 'react';




const Qrcode = () => {

  const [time, setTime] = useState("asd");

  axios.get('https://nbrasil.online/qrcode/qr')
  .then(function (response) {
    setTime(`${response.data[0]}`);
  })


  React.useEffect(() =>{
    async function axiosData(){
      const qr =  axios.get("https://nbrasil.online/qrcode/qr")
    }
    axiosData()
  },[])

  


  return (
    <div>
       <div className='containerQr'>
        <div className='alingdirectionQr'>
          <div className="mtpQr">
          <Link to="/home" className='yperdirectionQr active'>Home</Link>
            <Link to="/qrcode" className='yperdirectionQr active'>Qrcode</Link>
            <Link to="/listaesdu" className='yperdirectionQr'>Lista-Estudante</Link>
          </div>
        </div>

     

        <div className='alingcontainerQr'>
          <div className='containerQr2'>
              <div className="cardform">
                <h2> QRCODE</h2>
                <p>Leia o Qrcode Para Sua intentificação</p>
              </div>
          </div>

        <div className='border'> 
          <div className="Qrformscan">
      
          </div>
        </div>
 <QRCodeSVG value={time}/>
        </div>

          <div className='alingfooterQr'>
              <div className='footerQr'>
                  <h2>Tangy.app @2023</h2>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Qrcode

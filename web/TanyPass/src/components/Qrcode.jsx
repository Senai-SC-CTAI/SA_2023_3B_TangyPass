import React from 'react'
import { Link } from 'react-router-dom'
import './Qrcode.css'
import axios from 'axios';
import {QRCodeSVG} from 'qrcode.react';
import { useState,useEffect } from 'react';




const Qrcode = () => {

  const [time, setTime] = useState("asd");

 



  useEffect(() =>{
    async function axiosData(){
        axios.get('https://nbrasil.online/qrcode/qr')
        .then(function (response) {
          setTime(`${response.data[0]}`);
        })
    }
    setInterval(()=>{
      axiosData()
    },2000)

    axiosData()


  },[time])

  


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
      
        </div>
        <div className="Qrformscan">
            <QRCodeSVG value={time} className='qr'/>

          </div>
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

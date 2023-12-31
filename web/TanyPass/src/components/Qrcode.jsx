import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Qrcode.css'
import axios from 'axios';
import {QRCodeSVG} from 'qrcode.react';
import { useState,useEffect } from 'react';




const Qrcode = () => {

  const [time, setTime] = useState("");
  const [lastLogin, setLastLogin] = useState("");
  const [lastNameC, setLastName] = useState("");
  const [lastSala, setLastSala] = useState("");
  const [changeView, setChangeView] = useState("");
  const [changeQR, setChangeQR] = useState("");
 


  let lastId = 0;

  const verifyEntry = (cod) => {
    if(cod != 0){
      axios.get(`https://nbrasil.online/guarda/verify?cod=${cod}`)
      .then(function (response) {
        console.log("asd", response.data.nome)
        setLastLogin(response.data.nome)
        setLastName(response.data.user)
        setLastSala(response.data.sala)
        
        setChangeView("readedOpen")
        setChangeQR("readedQR")
      })
    }
  }

  useEffect(() =>{
    setInterval(()=>{
        axios.get('https://nbrasil.online/qrcode/qr')
        .then(function (response) {
          if(lastId != response.data[0]){
            verifyEntry(lastId);
            setTime(`${response.data[0]}`);
            lastId = response.data[0];
          }
        })
      },2000)

  },[setTime])

  const closeReaded = () => {
    setChangeView("");
    setChangeQR("");
  }  
  


  return (
    <div>
       <div className='containerQr'>
        <div className='alingdirectionQr'>
          <div className="mtpQr">
          <Link to="/home" className='yperdirectionQr active'>Home</Link>
            <Link to="/qrcode" className='yperdirectionQr active'>QrCode</Link>
            <Link to="/registro" className='yperdirectionQr active'>Registro</Link>
            <Link to="/listaesdu" className='yperdirectionQr'>Lista de Estudantes</Link>
          </div>
        </div>

        <div className={"readedUserOut "+changeView}>
          <div className='readedUser'>
            <div className='content-readed'>
              <h1>Dados recebidos</h1>

              <div className="infos">
                <h3>Nome Estudante</h3>
                <p>{lastLogin}</p>
              </div>
              <div className="infos">
                <h3>Usuário</h3>
                <p>{lastNameC}</p>
              </div>
              <div className="infos">
                <h3>Turma</h3>
                <p>{lastSala}</p>
              </div>
            </div>
            <button className='close' onClick={() => closeReaded()}>confirmar</button>
          </div>
        </div>

        <div className='alingcontainerQr'>
          <div className='containerQr2'>
              <div className="cardform">
                <h2> QRCODE</h2>
                <p>Leia o código QR para se identificar</p>

                <QRCodeSVG value={time} className="qr"/>

              </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Qrcode
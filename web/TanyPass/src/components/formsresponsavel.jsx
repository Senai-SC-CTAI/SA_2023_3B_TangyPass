import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import './formsresponsavel.css'
const formsresponsavel = () => {

  const [logUser, setLogUser] = useState("");
  useEffect(() => {
    const getUser = async () => {
      setLogUser(localStorage.getItem("emailUser"))
    }
    getUser();
  }, [logUser])

  return (
    <div>
      <div className='containerforms'>
        <div className='alingdirectionforms'>
        <div className='alingdirection'>
          <div className="mtp">
            <Link className='yperdirection'>{logUser}</Link>
            <Link className='yperdirection' to="/home">Home</Link>
            <Link to="/qrcode" className='yperdirection'>Qrcode</Link>
            <Link to="" className='yperdirection'>Forms</Link>
            <Link to="/listaesdu" className='yperdirection'>Lista-Estudante</Link>
          </div>
        </div>


          <div className='alingformsrepo'>
            <div>
                <div className='textformsrepo'> 
                <h2>Adicione O Responsavel</h2>
                </div>
              <div className='formsrepo1'>
                <label>Nome Completo</label>
                <input type="text" />
              </div>

              <div className='formsrepo2'>
                <label>CPF</label>
                <input type="number" />
              </div>
            </div>
            <div>

              <div className='formsrepo3'>
                <label>Data de Nascimento</label>
                <input type="date" />
              </div>

              <div className='formsrepo4'>
                <label>Senha</label>
                <input type="password" />
              </div>
            </div>
            <div className='alingbtnforms'>
              <div className='formsrepobtn'>
                <button>Enviar</button>
              </div>

            </div>
          </div>

          

          <div className='alingfooterforms'>
            <div className='footerforms'>
              <h2>Tangy.app @2023</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default formsresponsavel

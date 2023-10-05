import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'
import logohome from "../assets/Logo2.png"
const home = () => {
  return (
    <div>
      <div className='container'>
        <div className='alingdirection'>
          <div className="mtp">
            <Link className='yperdirection'>Home</Link>
            <Link to="./qrcode" className='yperdirection'>Qrcode</Link>
            <Link to="./listaedu" className='yperdirection'>Lista-Estudante</Link>
          </div>
        </div>

        <div className='logohome'>
          {/* <img src={logohome} alt="" /> */}
        </div>

        <div className='alingcontainer'>
          <div className='container2'>
            <h2>Bem vindo(a)</h2>
            <p> Ao Site Tangy  Pass, Aqui você poderar  monitorar a entrada e saida dos estudantes</p>
          </div>
        </div>

          <div className='alingfooter'>
              <div className='footer'>
                  <h2>Tangy.app @2023</h2>
              </div>
          </div>
      </div>
    </div>
  )
}

export default home
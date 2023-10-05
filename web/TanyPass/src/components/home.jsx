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
            <Link className='yperdirection'>Qrcode</Link>
            <Link className='yperdirection'>Lista-Estudante</Link>
          </div>
        </div>

        <div className='logohome'>
          <img src={logohome} alt="" />
        </div>

        <div className='container2'>

        </div>
      </div>
    </div>
  )
}

export default home
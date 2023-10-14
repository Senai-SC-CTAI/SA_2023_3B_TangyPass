import React from 'react'
import { Link } from 'react-router-dom'
import './Qrcode.css'
const Qrcode = () => {
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

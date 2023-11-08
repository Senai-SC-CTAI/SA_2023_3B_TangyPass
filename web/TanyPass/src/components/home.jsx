import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'
import logohome from "../assets/Logo2.png"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import saida from '../assets/saida.png'
const home = () => {
  const [logUser, setLogUser] = useState("");
  const navigate = useNavigate();

  async function logout() {
    localStorage.setItem("emailUser", "");
    navigate("/index");
  }

  useEffect(() => {
    const getUser = async () => {
      setLogUser(localStorage.getItem("emailUser"))
    }
    getUser();
  }, [logUser])

  return (
    <div>
      <div className='container'>
        <div className='alingdirection'>
          <div className="mtp">
            <Link onClick={logout}><img src={saida} alt=""/></Link>
            <Link className='yperdirection'>{logUser}</Link>
            <Link className='yperdirection' to="">Home</Link>
            <Link to="/qrcode" className='yperdirection'>Qrcode</Link>
            <Link to="/listaesdu" className='yperdirection'>Lista-Estudante</Link>
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
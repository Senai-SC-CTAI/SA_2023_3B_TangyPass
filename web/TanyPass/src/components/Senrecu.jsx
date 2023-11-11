import React from 'react'
import './styles/Senrecu.css'
import logo from '../assets/Logo.png'
import college from '../assets/college admission-rafiki 1.png'
import { Link } from 'react-router-dom'
const Senrecu = () => {
  return (
    <div>

      <div className='alingSenrecu '>
        <div className='form1Senrecu'>
        <div className='text2Senrecu'>
            <h2>Recuperar Senha</h2>
          </div>

        <div className='formularioSenrecu'>
            <input type="textSenrecu" className='inpSenrecu' placeholder='Usuário( Email )' />
            <button className='btnSenrecu'>Enviar</button>
            <Link to="/" className='yperSenrecu'> <p>Já possuo conta</p></Link>
            <p className='textfooterSenrecu'>Tangy.app @2023</p>
          </div>
        </div>


        <div className='form2Senrecu'>
        <div className='logo'>
            <img src={logo} alt="" />
          </div>
          <div className='text'>
            <h2>Coloque o seu E-mail e recupere sua senha aqui!</h2>
          </div>

          <div className='logo2Senrecu'>
            <img src={college} alt="" />
          </div>
        </div>
            

        </div>
      </div>
  )
}

export default Senrecu

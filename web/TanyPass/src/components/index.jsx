import React from 'react'
import './index.css'
import logo from '../assets/Logo.png'
import college from '../assets/college project-pana (1) 1.png'
const index = () => {
  return (
    <div>

      <div className='aling'>
        <div className='form1'>
          <div className='logo'>
            <img src={logo} alt="" />
          </div>
          <div className='text'>
            <h2>Faça Login Para Começarmos Sua experiência</h2>
          </div>

          <div className='logo2'>
            <img src={college} alt="" />
          </div>
        </div>


        <div className='form2'>
          <div className='text2'>
            <h2>Login</h2>
          </div>




          <div className='formulario'>
            <input type="text" className='inp' placeholder='Usuário( Email )' />
            <input type="email" className='inp' placeholder='Insira sua senha' />
            <button className='btn'>Enviar</button>
            <a href="" className='yper'> Esqueceu a senha? </a>
            <p className='textfooter'>Tangy.app @2023</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default index

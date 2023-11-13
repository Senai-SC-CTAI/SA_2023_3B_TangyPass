import React from 'react'
import './styles/index.css'
import logo from '../assets/Logo.png'
import college from '../assets/college project-pana (1) 1.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'


const index = () => {
  
  const [Password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const navigati = useNavigate();

  async function getEmail() {
    const email = await AsyncStorage.getItem("emailUser");
    if (email) {
      navigati("/home");
    }
  }

  getEmail()

  async function armItem(email, id) {
    try {
      localStorage.setItem('emailUser',email);
      localStorage.setItem('idUser',id)
      navigati('/home');
      Swal.fire({
        title: "Sucesso",
        text: "Usuario Logado",
        icon: "success"
      });
    } catch (e) {
      console.log(e);      
    }
  }

  const clicked = () => {
    axios.post(`https://nbrasil.online/aluno/login`, { user: email, password: Password })
      .then(e => {
        if (e.data.status != "error") {
          armItem(email, e.data.id)
        } else {
          Alert.alert('Erro', 'Credenciais inválidas');

        }
      })
      .catch(error => {
        Swal.fire({
          title: "Oops!",
          text: "Algo Deu Errado",
          icon: "error"
        });
        console.error('Erro na solicitação:', error);
      })
          
      console.log(email, Password)
  }
  return (
    <div>
      <div className='aling'>
        <div className='form1'>
          <div className='logo'>
            <img src={logo} alt="" />
          </div>
          <div className='text'>
            <h2>Faça login para começarmos sua experiência</h2>
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
            <input type="email" className='inp1' placeholder='Usuário( Email )' onChange={e => setEmail(e.target.value)}/>
            <input type="password" className='inp2' placeholder='Insira sua senha' onChange={e => setPassword(e.target.value)}/>
            <Link className='btn' onClick={clicked}><h4>Enviar</h4></Link>
            <Link to="/recuperar" className='yper'><p>Esqueceu a senha?</p></Link>
            <p className='textfooter'>Tangy.app @2023</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
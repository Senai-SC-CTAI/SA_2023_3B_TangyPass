import React, { useState, useEffect } from 'react';
import "./styles/home.css";
import { Link } from 'react-router-dom';
import logohome from "../assets/Logo.png";
import icon_home from '../assets/icon_home.png';
import open_door from '../assets/leave.png';
import morningIcon from '../assets/sun_white.png'
import afternoonIcon from '../assets/sun_black.png'
import nightIcon from '../assets/moon.png'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [logUser, setLogUser] = useState("");
  const [hora, setHora] = useState("Bom dia!");
  const [icon, setIcon] = useState(morningIcon);
  const navigate = useNavigate();

  async function logout() {
    localStorage.setItem("emailUser", "");
    navigate("/index");
  }

  useEffect(() => {
    const getUser = async () => {
      setLogUser(localStorage.getItem("emailUser"));
    };
    getUser();

    const currentHour = new Date().getHours();
    let newHora = "";
    let newIcon = morningIcon;

    if (currentHour >= 5 && currentHour < 13) {
      newHora = "Bom dia!";
      newIcon = morningIcon;
    } else if (currentHour >= 13 && currentHour < 19) {
      newHora = "Boa tarde!";
      newIcon = afternoonIcon;
    } else {
      newHora = "Boa noite!";
      newIcon = nightIcon;
    }

    setHora(newHora);
    setIcon(newIcon);
  }, [logUser]);

  return (
    <div className='body'>
      <div className='first_cont'>
        <div className="mtp">
          <Link to="/qrcode" className='yperdirection'>QrCode</Link>
          <Link to="/registro" className='yperdirection'>Registro</Link>
          <Link to="/listaesdu" className='yperdirection'>Lista-Estudante</Link>
        </div>
        

      <div className='loghome'>
        <img src={logohome} className='logohome' />
        <img src={icon_home} className='icon_home' />
      </div>
      
      
        <Link className='logUsuario'>
          {logUser}
        </Link>
      </div>
      <div className='daymensege'>
        <img src={icon} alt={hora} className='icon_day' />
        <p className='text_hora'>{hora}</p>
      
      <div className='mensege'>
        <p className='text_center'>
          Seja bem-vindo ao TangyPass, projetado para você monitorar a
          entrada e saída dos alunos, promovendo um ambiente seguro e
          eficiente para todos nós!
        </p>
      </div>
      </div>
      <div className='footer'>
        <footer>Tangy.app @2023</footer>
      </div>
    </div>
  );
};

export default Home;

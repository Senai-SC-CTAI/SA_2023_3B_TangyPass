import React from 'react';
import './styles/registro.css';
import logo2 from '../assets/Logo2.png';
import { Link, useNavigate } from 'react-router-dom';
import arrow_back from '../assets/arrow_back.png';

const Registro = () => {
  const navigate = useNavigate();

  return (
    <div className='body'>
      <div className="mtpQr">
        <Link to="/home" className='yperdirectionQr active'>Home</Link>
        <Link to="/Qrcode" className='yperdirectionQr active'>QrCode</Link>
        <Link to="/registro" className='yperdirectionQr'>Registro</Link>
        <Link to="/listaesdu" className='yperdirectionQr'>Lista de Estudantes</Link>
      </div>
      {/* <img src={logo2} alt="" className='logo1' /> */}
      <h1 className='tittle'>Registro</h1>
      <input type="text" className='select1' placeholder='Novo nome de usuário'/>
      <select className='select2'>
        <option className='option2'>Selecione o Estudante</option>
      </select>
      <button className='button'>Registrar</button>
      <footer className='footer'>Tangy.app @2023</footer>
    </div>
  );
}

export default Registro;

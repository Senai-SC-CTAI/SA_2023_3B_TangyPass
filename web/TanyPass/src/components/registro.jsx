import React from 'react';
import './styles/registro.css';
import logo2 from '../assets/Logo2.png';
import { Link, useNavigate } from 'react-router-dom';
import arrow_back from '../assets/arrow_back.png';

const Registro = () => {
  const navigate = useNavigate();

  return (
    <div className='body'>
      <Link to="#" onClick={() => navigate(-1)}><img src={arrow_back} className='arrowBack'/></Link>
      <Link to="#" onClick={() => navigate(-1)} className='backPage'>Voltar</Link>
      <div className="mtpQr">
        <Link to="/home" className='yperdirectionQr active'>Home</Link>
        <Link to="/Qrcode" className='yperdirectionQr active'>QrCode</Link>
        <Link to="/listaesdu" className='yperdirectionQr'>Lista-Estudante</Link>
      </div>
      <img src={logo2} alt="" className='logo1' />
      <h1 className='tittle'>Registro</h1>
      <select className='select1'>
        <option className='option1'>Novo usuário responsável</option>
      </select>
      <select className='select2'>
        <option className='option2'>Selecione o Estudante</option>
      </select>
      <button className='button'>Registrar</button>
      <footer className='footer'>Tangy.app @2023</footer>
    </div>
  );
}

export default Registro;

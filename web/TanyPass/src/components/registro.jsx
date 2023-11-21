import React from 'react';
import './styles/registro.css';
import logo2 from '../assets/Logo2.png';
import { Link, useNavigate } from 'react-router-dom';
import arrow_back from '../assets/arrow_back.png';
import { useState,useEffect } from 'react';

const Registro = () => {
  const [namealunos, setnameAlunos] = useState([])
  const url = "https://nbrasil.online/adm/listaEstudantes"

  useEffect(() => {
    async function fecthData() {
      const res = await fetch(url)
      const data = await res.json()
      setnameAlunos(data)
    }
    fecthData()
  }, [])


  return (
    <div className='body'>
      <div className="mtpQr">
        <Link to="/home" className='yperdirectionQr active'>Home</Link>
        <Link to="/Qrcode" className='yperdirectionQr active'>QrCode</Link>
        <Link to="/registro" className='yperdirectionQr'>Registro</Link>
        <Link to="/listaesdu" className='yperdirectionQr'>Lista de Estudantes</Link>
      </div>
      {/* <img src={logo2} alt="" className='logo1' /> */}
      <div className='formsz'>
        <h1 className='tittle'>Registro</h1>
        <input type="text" className='select1' placeholder='Novo nome de usuário'/>
        <select onChange={(e) => console.log(e)} className='select2'>
              {namealunos.map((aluno) => (
                <option
                  onClick={(e) => console.log(e)}
                  value={aluno.id}
                  key={aluno.id}
                  className="option2"
                >
                  Aluno: {aluno.nome} Sala: {aluno.sala}
                </option>
                
              ))}
            </select>
      </div>
      <button className='button'>Registrar</button>
      <footer className='footer'>Tangy.app @2023</footer>
    </div>
  );
}

export default Registro;

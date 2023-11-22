import React from 'react';
import './styles/registro.css';
import logo2 from '../assets/Logo2.png';
import { Link, useNavigate } from 'react-router-dom';
import arrow_back from '../assets/arrow_back.png';
import { useState,useEffect } from 'react';

const Registro = () => {
  const [namealunos, setnameAlunos] = useState([])
  const [alunoid, setALunoid] = useState(1);
  const [emailR, setEmailR] = useState("");
  const [msg, setMsg] = useState("");

  const url = "https://nbrasil.online/adm/listaEstudantes"

  useEffect(() => {
    async function fecthData() {
      const res = await fetch(url)
      const data = await res.json()
      setnameAlunos(data)
    }
    fecthData()
  }, [namealunos])

  const registrarResponsavel = () => {
    setMsg("Carregando");
    fetch("https://nbrasil.online/adm/registrarResponsavel",{
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailR,
        id: alunoid
      })
    })
    .then(e=>e.json())
    .then(e=>setMsg(e.status))
  }
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
          {msg}
          <input onKeyUp={e=>setEmailR(e.nativeEvent.target.value)} type="text" className='select1' placeholder='Email do responsavel'/>
          <select onChange={(e) => setALunoid(e.nativeEvent.target.value)} className='select2'>
              {namealunos.map((aluno) => (
                <option
                  value={aluno.id}
                  key={aluno.id}
                  className="option2"
                >
                  Aluno: {aluno.nome} Sala: {aluno.sala}
                </option>
                
              ))}
            </select>
        <button onClick={()=> registrarResponsavel()} className='button'>Registrar</button>
      </div>
    </div>
  );
}

export default Registro;

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './styles/Listaesdu.css'
import arrow_back from '../assets/arrow_back.png'

const Listaesdu = () => {

  const [namealunos, setnameAlunos] = useState([])
  const [changeView, setChangeView] = useState("");
  const [idaluno, setALunoid] = useState(1);
  const [infoAluno, setInfoAluno] = useState({
    id: 0,
    nome: "",
    sala: "",
    email: "",
    logTimes: 0,
    lastLog: 0,
    entradas: 0,
    responsaveis: []
  });
  

  const navigate = useNavigate();

  const url = "https://nbrasil.online/adm/listaEstudantes"

  useEffect(() => {
    async function fecthData() {
      const res = await fetch(url)
      const data = await res.json()
      setnameAlunos(data)
    }
    fecthData()
  }, [])

  function procurar() {
    fetch(`https://nbrasil.online/adm/infos?id=${idaluno}`)
    .then(e=>e.json())
    .then(e=>{
      setChangeView("readedOpen");
      setInfoAluno(e);
    })
  }  

  const responsaveis = () => {
    let x = infoAluno.responsaveis.map(e=>{
      return <p>{e}</p>
    })
    return x.length > 0 ? x : "Sem responsável.";
  }

  console.log(infoAluno)

  return (
    <div>
      <div className='containerlist'>
        <div className='alingdirectionlist'>
          <div className="mtpQr">
            <Link to="/home" className='yperdirectionQr active'>Home</Link>
            <Link to="/qrcode" className='yperdirectionQr active'>QrCode</Link>
            <Link to="/registro" className='yperdirectionQr'>Registro</Link>
            <Link to="/Listaesdu" className='yperdirectionQr'>Lista de Estudantes</Link>
          </div>
        </div>

        <div className='alingcontainerlist'>
          <div className='containerlists'>
            <div className='form'>
            <div className='alingbtn'>
              <h2>Estudantes</h2>

              <select onChange={(e) => setALunoid(e.nativeEvent.target.value)}>
                {namealunos.map((aluno) => (
                  <option
                    onClick={(e) => console.log(e)}
                    value={aluno.id}
                    key={aluno.id}
                    className="form2"
                  >
                    Aluno: {aluno.nome} Sala: {aluno.sala}
                  </option>
                  
                ))}
              </select>
              <button onClick={e=>procurar()}>Procurar</button>
            </div>
            </div>
          </div>
        </div>

        <div className='alingfooterlist'>
          <div className='footerlist'>
            <h2>Tangy.app @2023</h2>
          </div>
        </div>
      </div>

      <div className={"readedUserOut "+changeView}>
          <div className='readedUser'>
            <div className='content-readed'>
              <h1>Dados recebidos</h1>

              <div className="infos">
                <h3>Nome Estudante</h3>
                <p>id: {infoAluno.id} - {infoAluno.nome}</p>
              </div>
              <div className="infos">
                <h3>Usuário</h3>
                <p>{infoAluno.email}</p>
              </div>
              <div className="infos">
                <h3>Turma</h3>
                <p>{infoAluno.sala}</p>
              </div>
              <div className="infos">
                <h3>Entradas Registradas</h3>
                <p>{infoAluno.entradas}</p>
              </div>
              <div className="infos">
                <h3>Responsáveis</h3>
                {responsaveis()}
              </div>
            </div>
            <button className='close' onClick={() => setChangeView("")}>confirmar</button>
          </div>
        </div>
    </div>
  )
}

export default Listaesdu
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './styles/Listaesdu.css'
import arrow_back from '../assets/arrow_back.png'

const Listaesdu = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [namealunos, setnameAlunos] = useState([])
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
    if (searchQuery === "") {
      setnameAlunos((prevAlunos) => prevAlunos);
    } else {
      setnameAlunos((prevAlunos) =>
        prevAlunos.filter((aluno) =>
          aluno.nome.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }
  

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
            <div className='forminplist'>
                    <input
                      type="text"
                      placeholder="Pesquisar estudante..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            <select onChange={(e) => console.log(e)}>
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
            <div className='alingbtn'>
                <button onClick={procurar}>Procurar</button>
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

    </div>
  )
}

export default Listaesdu
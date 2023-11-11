import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import './styles/Listaesdu.css' 
const Listaesdu = () => {

  const [count, setCount] = useState(0)
  const [namealunos, setnameAlunos] = useState([])

  const url = "https://nbrasil.online/adm/listaEstudantes"

  useEffect (() =>{
    async function fecthData(){
      const res = await fetch(url)
      const data = await res.json()
      setnameAlunos(data)
    }
    fecthData()
  }, [])


  return (
    <div>
      <div className='containerlist'>
        <div className='alingdirectionlist'>
          <div className="mtpQr">
          <Link to="/home" className='yperdirectionQr active'>Home</Link>
          <Link to="/forms" className='yperdirectionQr active'>Forms</Link>
            <Link to="/qrcode" className='yperdirectionQr active'>Qrcode</Link>
            <Link to="/registro" className='yperdirectionQr'>Registro</Link>
          </div>
        </div>

     

        <div className='alingcontainerlist'>
          <div className='containerlists'>
          <select onChange={e => console.log(e)} className='form'>
            <option>Selecione</option>
            {namealunos.map((aluno) => (  //sintaxe do uso do map
              <option onClick={e => console.log(e)} value={aluno.id} key={aluno.id} className='form2' >
                Aluno: {aluno.nome} Sala: {aluno.sala}
              </option>
            ))}
          </select>
          </div>

        <div className='alingbtn'> 
            <input type="submit" value="Procurar" className='btnlist'/>
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
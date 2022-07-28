import {FiSearch} from 'react-icons/fi'
import {useState} from 'react'
import './App.css'

import api from './service/Api'

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  async function handleSearch() {
    if (input === '') {
      alert('insira um CEP')
      return
    }

    try {
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput('')
    } catch {
      alert('Erro ao buscar Cep')
      setInput('')
    }
  }

  return (
    <div className="container">
        <h1 className="title">Buscador de CEP</h1>
      
        <div className="containerInput">
          <input type='text' 
          placeholder="insira seu Cep..."
          value={input}
          onChange={ (e) => setInput(e.target.value) }
          />

          <button className="buttonSearch" onClick={handleSearch}>
            <FiSearch size={25} color='#fff' />
          </button>
        </div>

        
        {Object.keys(cep).length > 0 && (
             <div className='main'>
                <h2>CEP: { cep.cep }</h2>
      
                <span>{cep.logradouro}</span>
                <span>{cep.complemento}</span>
                <span>{cep.bairro}</span>
                <span>{cep.localidade} - {cep.uf}</span>
     
           </div>
   
        )} 
        
       

    </div>
  );
}

export default App;

import {FiSearch} from 'react-icons/fi'
import './App.css'
function App() {
  return (
    <div className="container">
        <h1 className="title">Buscador de CEP</h1>
      
        <div className="containerInput">
          <input type='text' 
          placeholder="insira seu Cep..."
          />

          <button className="buttonSearch">
            <FiSearch size={25} color='#fff' />
          </button>
        </div>

        <div className='main'>
          <h2>CEP:</h2>

          <span>Rua de teste</span>
          <span>Complemento</span>
          <span>vila </span>
          <span>estado localizado - ur</span>



        </div>


    </div>
  );
}

export default App;

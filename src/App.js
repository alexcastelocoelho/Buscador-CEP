import {FiSearch} from 'react-icons/fi'
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
    </div>
  );
}

export default App;

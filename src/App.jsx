
import { useState } from 'react';
import Form from './components/Form';
import './App.css';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState();

  

  return (
    <>
      <h1>
        Calcule seu IMC
      </h1>
      <form>
        <div>
          <label>Altura (m):</label>
          <input type='number' required />
        </div>
        
        <div>
          <label>Peso (kg):</label>
          <input type='number' required />
        </div>
        <button type="submit">Medir IMC</button>
      </form>
    </>
  )
}

export default App

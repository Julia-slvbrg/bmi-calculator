
import { useState } from 'react';
import Form from './components/Form';
import './App.css';

function App() {
  const [bmi, setBmi] = useState();

  

  return (
    <div className='container'>
      <h1>
        Calcule seu IMC
      </h1>
      <Form
        setBmi={setBmi}
      />

      {bmi && (
        <>{bmi} kg/m²</>
      )}
    </div>
  )
}

export default App

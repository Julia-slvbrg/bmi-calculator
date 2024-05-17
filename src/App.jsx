import { useState } from 'react';
import Form from './components/Form';

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
        <p>{bmi} kg/m²</p>
      )}
    </div>
  )
}

export default App

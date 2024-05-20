import { useState } from 'react';
import Form from './components/Form';
import Result from './components/Result';

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

      {bmi && <Result bmi={bmi} />}
    </div>
  )
}

export default App

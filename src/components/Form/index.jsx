import PropTypes from 'prop-types';
import { useState } from 'react';

const Form = ({ setBmi }) => {

    const [heightInput, setHeightInput] = useState('');
    const [weightInput, setWeightInput] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        if(heightInput === '0' || weightInput ==='0' ) {
           return alert('Dados inválidos! Confira os campos preenchidos');
        }

        const dotHeightInput = heightInput.replace(',', '.');
        const dotWeightInput = weightInput.replace(',', '.');

        const castingHeight = parseFloat(dotHeightInput);
        const castingWeight = parseFloat(dotWeightInput);

        const calcBmi = (castingWeight / (castingHeight * castingHeight)).toFixed(2);

        const commaBmi = calcBmi.replace('.', ',');

        setBmi(commaBmi);
    };

    return(
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Altura (m):</label>
                    <input 
                        type='number' 
                        required 
                        value={heightInput}
                        onChange={(e)=>setHeightInput(e.target.value)}
                        placeholder='ex.: 1,66'
                    />
                    
                </div>
                
                <div>
                    <label>Peso (kg):</label>
                    <input 
                        type='number' 
                        required 
                        value={weightInput}
                        onChange={(e)=>setWeightInput(e.target.value)}
                        placeholder='ex.: 55,300'
                    />
                </div>
                <button type="submit">Medir IMC</button>
            </form>
        </>
    )
};

Form.propTypes= {     
    setBmi: PropTypes.func.isRequired
};

export default Form
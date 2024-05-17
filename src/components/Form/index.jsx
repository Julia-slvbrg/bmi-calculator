import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Form.module.css'

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
            <form 
                onSubmit={onSubmit}
                className={styles.formContainer}
            >
                <div className={styles.formContainer__field}>
                    <label className={styles.formContainer__field__label}>Altura (m):</label>
                    <input className={styles.formContainer__field__input} 
                        type='number' 
                        required 
                        value={heightInput}
                        onChange={(e)=>setHeightInput(e.target.value)}
                        placeholder='ex.: 1,66'
                    />
                    
                </div>
                
                <div className={styles.formContainer__field}>
                    <label className={styles.formContainer__field__label}>Peso (kg):</label>
                    <input className={styles.formContainer__field__input} 
                        type='number' 
                        required 
                        value={weightInput}
                        onChange={(e)=>setWeightInput(e.target.value)}
                        placeholder='ex.: 55,300'
                    />
                </div>
                <button 
                    type="submit"
                    className={styles.formContainer__btn}
                >Medir IMC</button>
            </form>
        </>
    )
};

Form.propTypes= {     
    setBmi: PropTypes.func.isRequired
};

export default Form
/* eslint-disable no-constant-condition */
import PropTypes from 'prop-types';
import styles from './Result.module.css';


const Result = ({ bmi }) => {

    const commaBmi = bmi.replace('.', ',');

    const resultAvaliation = (bmi) => {
        if(bmi <= 16.9){
            return(
                <div className={styles.resultContainer}>
                    <p className={styles.text__danger}>{commaBmi} kg/m²</p>
                    <p className={styles.text__danger}>Menor que 16,9. Você está muito abaixo do peso.</p>
                </div>
            )
        }else if(17 <= bmi && bmi < 18.5){
            return(
                <div className={styles.resultContainer}>
                    <p className={styles.text__warning}>{commaBmi} kg/m²</p>
                    <p className={styles.text__warning}>Entre 17 e 18,4. Você está abaixo do peso.</p>
                </div>
            )
        }else if(18.5 <= bmi && bmi < 25){
            return(
                <div className={styles.resultContainer}>
                    <p className={styles.text__good}>{commaBmi} kg/m²</p>
                    <p className={styles.text__good}>Entre 18,5 e 24,9. Você está no peso normal.</p>
                </div>
            )
        }else if(25 <= bmi && bmi < 30){
            return(
                <div className={styles.resultContainer}>
                    <p className={styles.text__warning}>{commaBmi} kg/m²</p>
                    <p className={styles.text__warning}>Entre 25 e 29,9. Você está acima do peso.</p>
                </div>
            )
        }else if(30 <= bmi && bmi < 35){
            return(
                <div className={styles.resultContainer}>
                    <p className={styles.text__danger}>{commaBmi} kg/m²</p>
                    <p className={styles.text__danger}>Entre 30 e 34,9. Obesidade grau I.</p>
                </div>
            )
        }else if(35 <= bmi && bmi <= 40){
            return(
                <div className={styles.resultContainer}>
                    <p className={styles.text__danger}>{commaBmi} kg/m²</p>
                    <p className={styles.text__danger}>Entre 35 e 40. Obesidade grau II.</p>
                </div>
            )
        }else if(bmi > 40){
            return(
                <div className={styles.resultContainer}>
                    <p className={styles.text__danger}>{commaBmi} kg/m²</p>
                    <p className={styles.text__danger}>Maior que 40. Obesidade grau III.</p>
                </div>
            )
        }
    };

    return(
        <>
            {resultAvaliation(bmi)}
        </>
    )
};

Result.propTypes = {
    bmi: PropTypes.number.isRequired
};

export default Result
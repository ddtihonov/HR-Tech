import React from 'react';
import styles from './Switch.module.scss'

export default function Switch({title, image, handleClick, buttonText}) {

    return (
    <div className={styles.main}>
        <img className={styles.image} src={image} alt='круг'/>
        <div className={styles.info}>
            <p className={styles.subtitle}>Актион Акселератор 2.0. Финал</p>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>Начало 25 мая, 11:45 (МСК)</p>
        </div>
        <button className={styles.button} type='button' onClick={handleClick}>{buttonText}</button>
    </div>
);
}
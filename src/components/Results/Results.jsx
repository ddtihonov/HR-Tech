import React from 'react';
import styles from './Results.module.scss';

export default function Results() {

    return (
    <section className={styles.main} id="Results">
        <div className={styles.box}>
            <h3 className={styles.title}>Актион Акселератор подводит итоги</h3>
            <p className={styles.text}>В 11:00 состоится официальное открытие мероприятия на <a className={styles.link} href='#Hall'>Главной сцене.</a> </p>

            <p className={styles.text}>
                С 11:30 переключайтесь на трансляции по трекам: <a className={styles.link} href='#mentor'>Наставник,</a> 
                <a className={styles.link} href='#driver'>Драйвер,</a>
                <a className={styles.link} href='#motivator'> Мотиватор,</a> 
                <a className={styles.link} href='#technocrat'>Технократ</a>  и 
                <a className={styles.link} href='#novator'>Новатор.</a></p>
            <p className={styles.text}>В 16:00 возвращайтесь к трансляции на Главной сцене, где будут подведены итоги и пройдет награждение лучших проектов!</p>
        </div>
    </section>
    
);
}
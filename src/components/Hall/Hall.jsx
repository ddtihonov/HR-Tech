import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import styles from './Hall.module.scss';
import rocet from '../../image/Hall/rocet.png'

export default function Hall () {

    const [isVideo, setIsVideo] = useState();

    return (
        <section className={styles.main} id="Hall">
            <div className={styles.box}>
            <img className={styles.rocet} src={rocet} alt='зигзаг'/>
                <div className={styles.info}>
                    <h2 className={styles.title}>Главная сцена</h2>
                    <p className={styles.subtitle}>Актион Акселератор 2.0. Финал</p>
                    <p className={styles.text}>Начало 25 мая, 11:00 (МСК)</p>
                </div>
                <div className={styles.box_video}>
                    <ReactPlayer 
                        width='100%'
                        height='100%'
                        className={styles.video} url='https://www.youtube.com/embed/bLwQnK6xplI'/>
                </div>
                <ul className={styles.list} >
                <li className={styles.item}>
                    <button className={styles.button} type="button">Зал 1. Наставник</button>
                </li>
                <li className={styles.item}>
                    <button className={styles.button} type="button">Зал 2. Драйвер</button>
                </li>
                <li className={styles.item}>
                    <button className={styles.button} type="button">Зал 3. Мотиватор</button>
                </li>
                <li className={styles.item}>
                    <button className={styles.button} type="button">Зал 4. Технократ</button>
                </li>
                <li className={styles.item}>
                    <button className={styles.button} type="button">Зал 5. Новатор</button>
                </li>
            </ul>
            </div>
        </section>
    )
}
            /*<nav className={styles.nav}>
            <button className={styles.button} type="button" onClick={setIsVideo('https://www.youtube.com/embed/bLwQnK6xplI')}>Зал 1. Наставник</button>
            <button className={styles.button} type="button" onClick={setIsVideo('https://www.youtube.com/embed/bLwQnK6xplI')}>Зал 2. Драйвер</button>
            <button className={styles.button} type="button" onClick={setIsVideo('https://www.youtube.com/embed/bLwQnK6xplI')}>Зал 3. Мотиватор</button>
            <button className={styles.button} type="button" onClick={setIsVideo('https://www.youtube.com/embed/bLwQnK6xplI')}>Зал 4. Технократ</button>
            <button className={styles.button} type="button" onClick={setIsVideo('https://www.youtube.com/embed/bLwQnK6xplI')}>Зал 5. Новатор</button>
            </nav>*/ 
            
            //url='https://www.youtube.com/embed/bLwQnK6xplI'

            
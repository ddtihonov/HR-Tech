import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import styles from './Hall.module.scss';
import rocet from '../../image/Hall/rocet.png'

export default function Hall () {

    const [isVideo, setIsVideo] = useState('https://www.youtube.com/embed/bLwQnK6xplI');

    const handleOne = () => {
        setIsVideo('https://youtu.be/TG17LYvc7x4')
    };

    const handleTwo = () => {
        setIsVideo('https://youtu.be/r1QILqwzs1M')
    };

    const handleThree = () => {
        setIsVideo('https://youtu.be/B9Rmj2IvKgg')
    };

    const handleFour = () => {
        setIsVideo('https://youtu.be/5pKfbBJ1Jqw')
    };

    const  handleFive = () => {
        setIsVideo('https://youtu.be/ZsncR702gZs')
    }; 

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
                            className={styles.video} url={isVideo}/>
                    </div>
                    <ul className={styles.list} >
                    <li className={styles.item}>
                        <button className={styles.button} type="button" onClick={handleOne}>Зал 1. Наставник</button>
                    </li>
                    <li className={styles.item}>
                        <button className={styles.button} type="button" onClick={handleTwo}>Зал 2. Драйвер</button>
                    </li>
                    <li className={styles.item}>
                        <button className={styles.button} type="button" onClick={handleThree}>Зал 3. Мотиватор</button>
                    </li>
                    <li className={styles.item}>
                        <button className={styles.button} type="button" onClick={handleFour}>Зал 4. Технократ</button>
                    </li>
                    <li className={styles.item}>
                        <button className={styles.button} type="button" onClick={handleFive}>Зал 5. Новатор</button>
                    </li>
                </ul>
            </div>
        </section>
    )
}

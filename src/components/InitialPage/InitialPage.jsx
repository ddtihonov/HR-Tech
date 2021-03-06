import React from 'react';
import styles from './InitialPage.module.scss';
import hat from '../../image/InitialPage/hat.png';
import helix from '../../image/InitialPage/Helix.png'
import cone from '../../image/InitialPage/Cone.png'
import icosahedron from '../../image/InitialPage/Icosahedron.png'

export default function InitialPage () {
    return (
    <section className={styles.main} id="Initial">
        <img className={styles.icosahedron} src={icosahedron} alt='фигура'/>
        <div className={styles.container}>
            <div className={styles.image} >
                <img className={styles.cone} src={cone} alt='конус'/>
                <img className={styles.helix} src={helix} alt='спираль'/>
                <img className={styles.hat} src={hat} alt='спираль'/>
            </div>
            <div className={styles.box}>
                <h3 className={styles.subtitle}>Актион Акселератор 2.0</h3>
                <h1 className={styles.title}>Финал главного события в&#160;корпоративном обучении</h1>
                <p className={styles.text}>Начало трансляций 25 мая в 11:00 (МСК)</p>
            </div>
        </div>
    </section>
    )
}
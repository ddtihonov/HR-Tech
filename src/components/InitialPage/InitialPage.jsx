import React from 'react';
import styles from './InitialPage.module.scss';
import image from '../../image/InitialPage/image.png';
import hat from '../../image/InitialPage/hat.png';
import helix from '../../image/InitialPage/Helix.png'
import cone from '../../image/InitialPage/Cone.png'
import icosahedron from '../../image/InitialPage/Icosahedron.png'

export default function InitialPage () {
    return (
    <section className={styles.container}>
        <img className={styles.image} src={image} alt='мальчик'/>
        <div className={styles.box}>
            <h3 className={styles.subtitle}>Актион Акселератор 2.0</h3>
            <h1 className={styles.title}>Финал главного события в&#160;корпоративном обучении</h1>
            <p className={styles.text}>Начало трансляций 25 мая в 11:00 (МСК)</p>
        </div>
    </section>
    )
}

/*<img className={styles.hat} src={hat} alt='шапка'/>
        <img className={styles.cone} src={cone} alt='конус'/>
        <img className={styles.helix} src={helix} alt='спираль'/>*/

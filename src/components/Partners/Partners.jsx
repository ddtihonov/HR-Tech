import React from 'react';
import styles from './Partners.module.scss';
import image_1 from '../../image/Partners/image_1.png';
import image_2 from '../../image/Partners/image_2.png';
import image_3 from '../../image/Partners/image_3.png';
import image_4 from '../../image/Partners/image_4.png';
import image_5 from '../../image/Partners/image_5.png';
import image_6 from '../../image/Partners/image_6.png';
import image_7 from '../../image/Partners/image_7.png';
import image_8 from '../../image/Partners/image_8.png';
import image_9 from '../../image/Partners/image_9.png';
import image_10 from '../../image/Partners/image_10.png';
import image_11 from '../../image/Partners/image_11.png';
import image_12 from '../../image/Partners/image_12.png';

export default function Partners() {

    return (
    <section className={styles.main}>
        <div className={styles.box}>
            <h2 className={styles.title}>Информационные партнеры Актион Акселератор 2.0</h2>
            <ul className={styles.list}>
                <li className={styles.item}>
                <a className={styles.link} target='_blank' rel='noopener noreferrer' href='https://vk.com/action_mcfr'><img className={styles.image} src={image_1} alt='логотип'/></a>
                </li>
                <li className={styles.item}>
                <a className={styles.link} target='_blank' rel='noopener noreferrer' href='https://vk.com/action_mcfr'><img className={styles.image} src={image_2} alt='логотип'/></a>
                </li>
                <li className={styles.item}>
                <a className={styles.link} target='_blank' rel='noopener noreferrer' href='https://vk.com/action_mcfr'><img className={styles.image} src={image_3} alt='логотип'/></a>
                </li>
                <li className={styles.item}>
                <a className={styles.link} target='_blank' rel='noopener noreferrer' href='https://vk.com/action_mcfr'><img className={styles.image} src={image_4} alt='логотип'/></a>
                </li>
                <li className={styles.item}>
                <a className={styles.link} target='_blank' rel='noopener noreferrer' href='https://vk.com/action_mcfr'><img className={styles.image} src={image_5} alt='логотип'/></a>
                </li>
                <li className={styles.item}>
                <a className={styles.link} target='_blank' rel='noopener noreferrer' href='https://vk.com/action_mcfr'><img className={styles.image} src={image_6} alt='логотип'/></a>
                </li>
                <li className={styles.item}>
                <a className={styles.link} target='_blank' rel='noopener noreferrer' href='https://vk.com/action_mcfr'><img className={styles.image} src={image_7} alt='логотип'/></a>
                </li>
                <li className={styles.item}>
                <a className={styles.link} target='_blank' rel='noopener noreferrer' href='https://vk.com/action_mcfr'><img className={styles.image} src={image_8} alt='логотип'/></a>
                </li>
                <li className={styles.item}>
                <a className={styles.link} target='_blank' rel='noopener noreferrer' href='https://vk.com/action_mcfr'><img className={styles.image} src={image_9} alt='логотип'/></a>
                </li>
                <li className={styles.item}>
                <a className={styles.link} target='_blank' rel='noopener noreferrer' href='https://vk.com/action_mcfr'><img className={styles.image} src={image_10} alt='логотип'/></a>
                </li>
                <li className={styles.item}>
                <a className={styles.link} target='_blank' rel='noopener noreferrer' href='https://vk.com/action_mcfr'><img className={styles.image} src={image_11} alt='логотип'/></a>
                </li>
                <li className={styles.item}>
                <a className={styles.link} target='_blank' rel='noopener noreferrer' href='https://vk.com/action_mcfr'><img className={styles.image} src={image_12} alt='логотип'/></a>
                </li>
            </ul>
        </div>
    </section>
    
);
}
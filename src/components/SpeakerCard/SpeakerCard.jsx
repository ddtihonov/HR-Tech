import React from 'react';
import styles from './SpeakerCard.module.scss'

export default function SpeakerCard({title, text, image, surname}) {

    return (
    <li className={styles.item}>
        <div className={styles.info}>
            <h5 className={styles.title}>{title}</h5>
            <h5 className={styles.surname}>{surname}</h5>
            <img className={styles.image} src={image} alt='человек'/>
        </div>
        <p className={styles.text}>{text}</p>
    </li>
);
}
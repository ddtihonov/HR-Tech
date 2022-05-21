import React from 'react';
import styles from './PresentProjects.module.scss'


export default function PresentProjects({title, text}) {

    return (
        <li className={styles.item}>
            <h5 className={styles.title}>{title}</h5>
            <p className={styles.text} >{text}</p>
        </li>
    )

}
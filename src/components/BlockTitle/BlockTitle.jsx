import React from 'react';
import styles from './BlockTitle.module.scss'

export default function BlockTitle({title, text}) {

    return (
    <div className={styles.box_info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
    </div>
);
}
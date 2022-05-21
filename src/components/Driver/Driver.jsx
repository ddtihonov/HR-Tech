import React from 'react';
import styles from './Driver.module.scss'
import BlockTitle from '../BlockTitle/BlockTitle';

export default function Driver() {

    return (
    <section className={styles.main}>
        <div className={styles.box}>
            <BlockTitle
                title={'Зал 2. Драйвер'}
                text={'Проекты корпоративного обучения, направленные на развитие системы наставничества и преемственности'}
            />
            <h3 className={styles.subtitle}>Жюри:</h3>
            <ul className={styles.list}>
                <li className={styles.item}>
                </li>
            </ul>

        </div>
    
    </section>
    
);
}
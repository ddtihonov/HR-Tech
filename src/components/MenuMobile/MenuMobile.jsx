import React from "react";
import styles from './MenuMobile.module.scss'
import logo from '../../image/logo.svg';

export default function MenuMobile ({onClose}) {

    return (
        <section className={styles.main}>
            <div className={styles.box}>
                <img className={styles.logo} src={logo} alt = 'логотип'/>
                <button className={styles.button} onClick={onClose}/>
            </div>
            <nav className={styles.nav}>
            <a className={styles.link} href='#AboutUs'>О проекте</a>
            <a className={styles.link} href='#'>Клуб</a>
            <a className={styles.link} href='#Results'>Расписание </a>
            <a className={styles.link} href='#Hall'>Трансляция</a>
            <a className={styles.link} href='#Footer'>Контакты</a>
            </nav>
        </section>
    )
}

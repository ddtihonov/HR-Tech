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
            <a className={styles.link} href='#AboutUs' onClick={onClose}>О проекте</a>
            <a className={styles.link} href='#Club' onClick={onClose}>Клуб</a>
            <a className={styles.link} href='#Results' onClick={onClose}>Расписание </a>
            <a className={styles.link} href='#Hall' onClick={onClose}>Трансляция</a>
            <a className={styles.link} href='#Footer' onClick={onClose}>Контакты</a>
            </nav>
        </section>
    )
}

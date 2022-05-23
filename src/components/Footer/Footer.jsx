import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../image/Footer/logo.svg'
import twitter from '../../image/Footer/twitter.svg'

export default function Footer () {

    return (
        <footer className={styles.footer} id="Footer">
            <div className={styles.container}>
                <div className={styles.info} >
                    <div className={styles.box_logo}>
                        <img className={styles.logo} src={logo} alt = 'логотип'/>
                        <div className={styles.box}>
                            <h5 className={styles.subtitle}>Контакты</h5>
                            <p className={styles.text}>accelerator@action-media.ru</p>
                        </div>
                    </div>
                    <a className={styles.twitter} target='_blank' rel='noopener noreferrer' href='https://t.me/actionhrtech'><img className={styles.twitter} src={twitter} alt = 'логотип'/></a>
                </div>
                <p className={styles.copyright}>&#169; 2022 All rights reserved</p>
            </div>
        </footer>
    )
}
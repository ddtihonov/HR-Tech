import React, { useState } from 'react';
import styles from './Footer.module.scss';
import logo from '../../image/Footer/logo.svg'
import twitter from '../../image/Footer/twitter.svg'

export default function Footer () {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        } 
        else if (scrolled <= 300){
            setVisible(false)
        }
    };

    window.addEventListener('scroll', toggleVisible);

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };


    return (
        <footer className={styles.footer} id="Footer">
            <div className={styles.container}>
                <div className={styles.info} >
                    <div className={styles.box_logo}>
                        <a className={styles.link} href='#Initial'>
                            <img className={styles.logo} src={logo} alt = 'логотип'/>
                        </a>
                        <div className={styles.box}>
                            <h5 className={styles.subtitle}>Контакты</h5>
                            <p className={styles.text}>accelerator@action-media.ru</p>
                        </div>
                    </div>
                    <a className={styles.twitter} target='_blank' rel='noopener noreferrer' href='https://t.me/actionhrtech'><img className={styles.twitter} src={twitter} alt = 'логотип'/></a>
                </div>
                <p className={styles.copyright}>&#169; 2022 All rights reserved</p>
            </div>
            <button className={styles.footer_button} onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} />
        </footer>
    )
}
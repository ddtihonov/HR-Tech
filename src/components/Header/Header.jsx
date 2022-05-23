import React, {useCallback, useState} from 'react';
import header from './header.module.scss';
import logo from '../../image/logo.svg';

export default function Header({isOpen}) {

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

    return (
      <header className={`${header.header} ${visible && header.header_scroll}`}>
        <div className={header.box}>
            <img className={header.logo} src={logo} alt = 'логотип'/>
          <nav className={header.nav}>
            <a className={header.link} href='#AboutUs'>О проекте</a>
            <a className={header.link} href='#Club'>Клуб</a>
            <a className={header.link} href='#Results'>Расписание </a>
            <a className={header.link} href='#Hall'>Трансляция</a>
            <a className={header.link} href='#Footer'>Контакты</a>
          </nav>
          <button className={header.button} onClick={isOpen}/>
        </div>
      </header>
    );
  };
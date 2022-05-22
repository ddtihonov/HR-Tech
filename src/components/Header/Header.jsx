import React from 'react';
import header from './header.module.scss';
import logo from '../../image/logo.svg';

export default function Header({isOpen}) {
    return (
      <header className={header.header}>
        <div className={header.box}>
            <img className={header.logo} src={logo} alt = 'логотип'/>
          <nav className={header.nav}>
            <a className={header.link} href='#AboutUs'>О проекте</a>
            <a className={header.link} href='#'>Клуб</a>
            <a className={header.link} href='#Results'>Расписание </a>
            <a className={header.link} href='#'>Трансляция</a>
            <a className={header.link} href='#Footer'>Контакты</a>
          </nav>
          <button className={header.button} onClick={isOpen}/>
        </div>
      </header>
    );
  };
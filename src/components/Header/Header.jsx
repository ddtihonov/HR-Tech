import React from 'react';
import { Link } from 'react-router-dom';
import header from './header.module.scss';
import logo from '../../image/logo.svg';

export default function Header({isOpen}) {
    return (
      <header className={header.header}>
        <div className={header.box}>
          <Link  to="/">
            <img className={header.logo} src={logo} alt = 'логотип'/>
          </Link>
          <nav className={header.nav}>
            <Link className={header.link} to='/services'>О проекте</Link>
            <Link className={header.link} to='/training'>Клуб</Link>
            <Link className={header.link} to='/price'>Расписание </Link>
            <Link className={header.link} to='/price'>Трансляция</Link>
            <Link className={header.link} to='/contacts'>Контакты</Link>
          </nav>
          <button className={header.button}/>
        </div>
      </header>
    );
  };
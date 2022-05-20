import React from 'react';
import main from './main.module.scss'
import InitialPage from '../InitialPage/InitialPage';
import Partners from '../Partners/Partners';

export default function Main({isOpen}) {

    return (
    <section className={main.main}>
        <Partners/>
    </section>
    
);
}
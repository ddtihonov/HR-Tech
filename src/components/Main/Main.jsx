import React from 'react';
import main from './main.module.scss'
import InitialPage from '../InitialPage/InitialPage';
import Partners from '../Partners/Partners';
import Mentor from '../Mantor/Mentor';
import Driver from '../Driver/Driver';
import Motivator from '../Motivator/Motivator';
import Novator from '../Novator/Novator';

export default function Main({isOpen}) {

    return (
    <section className={main.main}>
        <Mentor/>
        <Driver/>
        <Motivator/>
        <Novator/>
        <Partners/>
    </section>
    
);
}
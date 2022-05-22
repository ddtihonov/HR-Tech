import React from 'react';
import main from './main.module.scss'
import InitialPage from '../InitialPage/InitialPage';
import Partners from '../Partners/Partners';
import Mentor from '../Mentor/Mentor';
import Driver from '../Driver/Driver';
import Motivator from '../Motivator/Motivator';
import Novator from '../Novator/Novator';
import Technocrat from '../Technocrat/Technocrat';
import AboutUs from '../AboutUs/AboutUs';
import Results from '../Results/Results';

export default function Main({isOpen}) {

    return (
    <section className={main.main}>
        <Results/>
        <Mentor/>
        <Driver/>
        <Motivator/>
        <Technocrat/>
        <Novator/>
        <AboutUs/>
        <Partners/>
    </section>
    
);
}
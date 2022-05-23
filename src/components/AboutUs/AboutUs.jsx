import React from 'react';
import styles from './AboutUs.module.scss';
import cone from '../../image/AboutUs/cone.png'

export default function AboutUs() {
    return (
    <section className={styles.main} id="AboutUs">
        <img className={styles.cone} src={cone} alt='конус'/>
        <div className={styles.box}>
            <h2 className={styles.title}>Об Акселераторе</h2>
            <p className={styles.text}><span className={styles.text_big}>Актион Акселератор — </span>это первая в России программа профессиональной поддержки корпоративного обучения, созданная Группой Актион. В этом году Акселератор проводится второй раз, и он масштабнее, чем предыдущий. <span className={styles.text_big}>В Акселераторе 2.0 приняло участие 200 компаний</span> крупного и среднего бизнеса, что почти в два раза больше, чем в прошлом году.</p>
            <p className={styles.text}>Из 200 проектов жюри выбрало 56 самых перспективных, которые продолжили борьбу за <span className={styles.text_big}>грант в размере 650 тысяч рублей.</span> Именно такую сумму получит от Группы Актион каждая из пяти компаний-победителей на финальном мероприятии 25 мая 2022. </p>
            <p className={styles.text}>Программа Академии <span className={styles.text_big}>Актион Акселератора 2.0</span> длилась пять учебных недель. Три-четыре раза в неделю участники встречались онлайн для проработки своих проектов под руководством наших экспертов. Всего мы провели 17 онлайн-мероприятий: мастер-классов, коуч-сессий, разборов проектов, дискуссионных встреч. Посмотреть их можно в сообществе Акселератора <a className={styles.link} target='_blank' rel='noopener noreferrer' href='https://vk.com/action_mcfr'>во ВКонтакте.</a></p>
        </div>
    </section>
    );
};
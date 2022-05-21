import React from 'react';
import styles from './Mentor.module.scss'
import BlockTitle from '../BlockTitle/BlockTitle';
import SpeakerCard from '../SpeakerCard/SpeakerCard';
import image_1 from '../../image/Mentor/Elena_P.png';
import image_2 from '../../image/Mentor/Ilia_D.png';
import image_3 from '../../image/Mentor/Natalia_D.png';
import image_4 from '../../image/Mentor/Ser_C.png';

export default function Mentor() {

    return (
    <section className={styles.main}>
        <div className={styles.box}>
            <BlockTitle
                title={'Зал 1. Наставник'}
                text={'Проекты корпоративного обучения, направленные на развитие системы наставничества и преемственности'}
            />
            <h3 className={styles.subtitle}>Жюри:</h3>
            <ul className={styles.list}>
                <SpeakerCard
                    title={'Елена  Позолотина'}
                    text={'Директор Корпоративного университета ТМК2U, ПАО «ТМК»'}
                    image={image_1}
                />
                <SpeakerCard
                    title={'Илья Дементьев'}
                    text={'Ректор Корпоративного университета, ПАО «Газпром нефть»'}
                    image={image_2}
                />
                <SpeakerCard
                    title={'Наталия Даниленко'}
                    text={'HR Head в Яндекс'}
                    image={image_3}
                />
                <SpeakerCard
                    title={'Сергей Сус'}
                    text={'Директор по развитию Группы Актион'}
                    image={image_4}
                />
            </ul>

        </div>
    
    </section>
    
);
}
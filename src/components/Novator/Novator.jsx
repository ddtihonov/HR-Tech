import React from 'react';
import styles from './Novator.module.scss'
import BlockTitle from '../BlockTitle/BlockTitle';
import SpeakerCard from '../SpeakerCard/SpeakerCard';
import image_1 from '../../image/Novator/Lena_T.png';
import image_2 from '../../image/Novator/Andru_S.png';
import image_3 from '../../image/Novator/Danil_M.png';

export default function Novator() {

    return (
    <section className={styles.main}>
        <div className={styles.box}>
            <BlockTitle
                title={'Зал 5. Новатор'}
                text={'Проекты корпоративного обучения, направленные на развитие системы наставничества и преемственности'}
            />
            <h3 className={styles.subtitle}>Жюри:</h3>
            <ul className={styles.list}>
            <SpeakerCard
                    title={'Елена Тихомирова'}
                    text={'Руководитель ELearning center'}
                    image={image_1}
                />
                <SpeakerCard
                    title={'Андрей  Скуратов'}
                    text={'Руководитель Корпоративного университета, ПАО «МТС-Банк»'}
                    image={image_2}
                />
                <SpeakerCard
                    title={'Данил Мяло'}
                    text={'Главный редактор направления Актион HR и Кадры Группы Актион'}
                    image={image_3}
                />
            </ul>
        </div>
    </section>
    
);
}
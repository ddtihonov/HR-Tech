import React, {useState} from 'react';
import styles from './Motivator.module.scss'
import BlockTitle from '../BlockTitle/BlockTitle';
import SpeakerCard from '../SpeakerCard/SpeakerCard';
import image_1 from '../../image/Motivator/Poman_B.png';
import image_2 from '../../image/Motivator/Alena_G.png';
import image_3 from '../../image/Motivator/Anna_I.png';
import image_4 from '../../image/Motivator/Mari_L.png';
import PresentProjects from '../PresentProjects/PresentProjects';
import { arrMotivator } from '../../utils/data';
import Switch from '../Switch/Switch';
import circle from '../../image/Motivator/circle.png'

export default function Motivator() {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive)
    };

    const buttonText = isActive ? 'CВЕРНУТЬ ТРАНСЛЯЦИЮ' : 'СМОТРЕТЬ ТРАНСЛЯЦИЮ'

    return (
    <section className={styles.main}>
        <div className={styles.box}>
            <BlockTitle
                title={'Зал 3. Мотиватор'}
                text={'Проекты корпоративного обучения, направленные на развитие системы наставничества и преемственности'}
            />
            <h3 className={styles.title_present}>Жюри:</h3>
            <div className={styles.container}>
                <ul className={styles.list}>
                <SpeakerCard
                        title={'Роман Баскин'}
                        text={'Директор Корпоративного университета, ОАО «РЖД»'}
                        image={image_1}
                    />
                    <SpeakerCard
                        title={'Алена Гейдт'}
                        text={'Директор по персоналу АНО «Платформа НТИ» и АНО «Университет 20.35»'}
                        image={image_2}
                    />
                    <SpeakerCard
                        title={'Анна Имас'}
                        text={'Директор корпоративного бизнеса Группы Актион'}
                        image={image_3}
                    />
                    <SpeakerCard
                        title={'Марина Львова'}
                        text={'Директор по организационному развитию Группы компаний HeadHunter'}
                        image={image_4}
                    />
                </ul>
                <Switch
                        title={'Мотиватор'}
                        image={circle}
                        handleClick={handleClick}
                        buttonText={buttonText}
                    />
            </div>
            <div className={styles.box_present}>
                <h3 className={styles.title_present}>Проекты представят:</h3>
                <ul className={styles.list_present}>
                    {arrMotivator.map((item, index) => {
                        return (
                            <PresentProjects
                                key={index}
                                title={item.title}
                                text={item.text}
                            />
                        )
                    })}
                </ul>
            </div>
        </div>
    
    </section>
    
);
}
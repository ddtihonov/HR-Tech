import React, {useState} from 'react';
import ReactPlayer from 'react-player';
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
import circle from '../../image/Motivator/circle.png';
import curl from '../../image/Driver/curl.png';
import grup from '../../image/Motivator/grup.png';

export default function Motivator() {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive)
    };

    const buttonText = isActive ? 'CВЕРНУТЬ ТРАНСЛЯЦИЮ' : 'СМОТРЕТЬ ТРАНСЛЯЦИЮ'

    return (
    <section className={styles.main} id="motivator">
        <div className={styles.box}>
            <BlockTitle
                title={'Зал 3. Мотиватор'}
                text={'Проекты корпоративного обучения, направленные на развитие системы наставничества и преемственности'}
            />
            <h3 className={styles.title_present}>Жюри:</h3>
            <div className={styles.container}>
                <ul className={styles.list} id='HallThree'>
                <img className={styles.curl} src={curl} alt='фигура'/>
                <img className={styles.donut} src={curl} alt='фигура'/>
                <img className={styles.grup} src={grup} alt='фигура'/>       
                <SpeakerCard
                        title={'Роман'}
                        surname={'Баскин'}
                        text={'Директор Корпоративного университета, ОАО «РЖД»'}
                        image={image_1}
                    />
                    <SpeakerCard
                        title={'Алена'}
                        surname={'Гейдт'}
                        text={'Директор по персоналу АНО «Платформа НТИ» и АНО «Университет 20.35»'}
                        image={image_2}
                    />
                    <SpeakerCard
                        title={'Анна'}
                        surname={'Имас'}
                        text={'Директор корпоративного бизнеса Группы Актион'}
                        image={image_3}
                    />
                    <SpeakerCard
                        title={'Марина'}
                        surname={'Львова'}
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
            {isActive && <div className={styles.box_video}>
                <ReactPlayer 
                    width='100%'
                    height='100%'
                    className={styles.video} url='https://youtu.be/eC4bkqChBs8' />
            </div>}
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
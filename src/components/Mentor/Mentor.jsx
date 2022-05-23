import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import styles from './Mentor.module.scss'
import BlockTitle from '../BlockTitle/BlockTitle';
import SpeakerCard from '../SpeakerCard/SpeakerCard';
import image_1 from '../../image/Mentor/Elena_P.png';
import image_2 from '../../image/Mentor/Ilia_D.png';
import image_3 from '../../image/Mentor/Natalia_D.png';
import image_4 from '../../image/Mentor/Ser_C.png';
import PresentProjects from '../PresentProjects/PresentProjects';
import PresentProjectsBig from '../PresentProjectsBig/PresentProjectsBig';
import { arrMentor } from '../../utils/data';
import Switch from '../Switch/Switch';
import circle from '../../image/Mentor/circle.png'
import donut from '../../image/Mentor/donut.png'


export default function Mentor() {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive)
    };

    const buttonText = isActive ? 'CВЕРНУТЬ ТРАНСЛЯЦИЮ' : 'СМОТРЕТЬ ТРАНСЛЯЦИЮ'
    

    return (
    <section className={styles.main} id="mentor">
        <div className={styles.box}>
            <BlockTitle
                title={'Зал 1. Наставник'}
                text={'Проекты корпоративного обучения, направленные на развитие системы наставничества и преемственности'}
            />
            <h3 className={styles.title_present}>Жюри:</h3>
            <div className={styles.container}>
                <img className={styles.donut} src={donut} alt='пончик'/>
                <ul className={styles.list}>
                    <SpeakerCard
                        title={'Елена'}
                        surname={'Позолотина'}
                        text={'Директор Корпоративного университета ТМК2U, ПАО «ТМК»'}
                        image={image_1}
                    />
                    <SpeakerCard
                        title={'Илья'}
                        surname={'Дементьев'}
                        text={'Ректор Корпоративного университета, ПАО «Газпром нефть»'}
                        image={image_2}
                    />
                    <SpeakerCard
                        title={'Наталия'}
                        surname={'Даниленко'}
                        text={'HR Head в Яндекс'}
                        image={image_3}
                    />
                    <SpeakerCard
                        title={'Сергей'}
                        surname={'Сус'}
                        text={'Директор по развитию Группы Актион'}
                        image={image_4}
                    />
                </ul>
                <Switch
                    title={'Наставник'}
                    image={circle}
                    handleClick={handleClick}
                    buttonText={buttonText}
                />
            </div>
            {isActive && <div className={styles.box_video}>
                <ReactPlayer 
                    width='100%'
                    height='100%'
                    className={styles.video} url='https://www.youtube.com/embed/bLwQnK6xplI' />
            </div>}
            <div className={styles.box_present}>
                <h3 className={styles.title_present}>Проекты представят:</h3>
                <ul className={styles.list_present}>
                    {arrMentor.map((item, index) => {
                        if(index !== 3) {
                            return (
                                <PresentProjects
                                    key={index}
                                    title={item.title}
                                    text={item.text}
                                />
                                )
                        } else {
                            return (
                                <PresentProjectsBig
                                    key={index}
                                    title={item.title}
                                    text={item.text}
                                />
                            )
                        }
                    })}
                </ul>
            </div>
        </div>
    </section>
);
}
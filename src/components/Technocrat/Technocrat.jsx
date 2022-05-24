import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import styles from './Technocrat.module.scss'
import BlockTitle from '../BlockTitle/BlockTitle';
import SpeakerCard from '../SpeakerCard/SpeakerCard';
import image_1 from '../../image/Technocrat/Oleg_Z.png';
import image_2 from '../../image/Technocrat/Kata_B.png';
import image_3 from '../../image/Technocrat/Alex_E.png';
import PresentProjects from '../PresentProjects/PresentProjects';
import { arrTechnocrat } from '../../utils/data';
import Switch from '../Switch/Switch';
import circle from '../../image/Technocrat/circle.png';
import PresentProjectsBig from '../PresentProjectsBig/PresentProjectsBig';
import circ from '../../image/Driver/circ.png'
import curl from '../../image/Driver/curl.png';



export default function Technocrat() {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive)
    };

    const buttonText = isActive ? 'CВЕРНУТЬ ТРАНСЛЯЦИЮ' : 'СМОТРЕТЬ ТРАНСЛЯЦИЮ'

    return (
    <section className={styles.main} id="technocrat">
        <div className={styles.box}>
            <BlockTitle
                title={'Зал 4. Технократ'}
                text={'Проекты корпоративного обучения, направленные на развитие системы наставничества и преемственности'}
            />
            <h3 className={styles.title_present}>Жюри:</h3>
            <div className={styles.container}>
                <ul className={styles.list} id='HallFour'>
                <img className={styles.grup} src={circ} alt='фигура'/>
                <img className={styles.curl} src={curl} alt='фигура'/>     
                <SpeakerCard
                        title={'Олег Замышляев'}
                        text={'Основатель Tellsy и Mozlab'}
                        image={image_1}
                    />
                    <SpeakerCard
                        title={'Екатерина Барабанова'}
                        text={'Директор по развитию персонала Ростелеком'}
                        image={image_2}
                    />
                    <SpeakerCard
                        title={'Александр Евдокименко'}
                        text={'Директор KPMG Academy Russia'}
                        image={image_3}
                    />
                </ul>
                <Switch
                        title={'Технократ'}
                        image={circle}
                        handleClick={handleClick}
                        buttonText={buttonText}
                    />
            </div>
            {isActive && <div className={styles.box_video}>
                <ReactPlayer 
                    width='100%'
                    height='100%'
                    className={styles.video} url='https://youtu.be/4ZimARhWFVU' />
            </div>}
            <div className={styles.box_present}>
                <h3 className={styles.title_present}>Проекты представят:</h3>
                <ul className={styles.list_present}>
                    {arrTechnocrat.map((item, index) => {
                    if(index !== 0) {
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
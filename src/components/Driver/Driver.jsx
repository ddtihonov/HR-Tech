import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import styles from './Driver.module.scss';
import BlockTitle from '../BlockTitle/BlockTitle';
import SpeakerCard from '../SpeakerCard/SpeakerCard';
import image_1 from '../../image/Driver/Igor_B.png';
import image_2 from '../../image/Driver/Marina_D.png';
import image_3 from '../../image/Driver/Tatiana_V.png';
import image_4 from '../../image/Driver/Ilia_K.png';
import PresentProjects from '../PresentProjects/PresentProjects';
import { arrDriver } from '../../utils/data';
import Switch from '../Switch/Switch';
import circle from '../../image/Driver/circle.png';
import donut from '../../image/Driver/donut.png';
import triangle from '../../image/Driver/triangle.png';
import circ from '../../image/Driver/circ.png';
import conu from '../../image/Driver/conu.png';
import curl from '../../image/Driver/curl.png';
import { v4 as uuidv4 } from 'uuid';

export default function Driver() {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive)
    };

    const buttonText = isActive ? 'CВЕРНУТЬ ТРАНСЛЯЦИЮ' : 'СМОТРЕТЬ ТРАНСЛЯЦИЮ'

    return (
    <section className={styles.main} id="driver">
        <div className={styles.box}>
            <img className={styles.donut} src={donut} alt='пончик'/>
            <div className={styles.box_absolut} >
                <img className={styles.conu} src={conu} alt='фигура'/>
                <img className={styles.circ} src={circ} alt='фигура'/>
                <img className={styles.triangle} src={triangle} alt='фигура'/>
                <img className={styles.curl} src={curl} alt='фигура'/>
            </div>
            <BlockTitle
                title={'Зал 2. Драйвер'}
                text={'Проекты корпоративного обучения, направленные на развитие системы наставничества и преемственности'}
            />
            <h3 className={styles.title_present}>Жюри:</h3>
            <div className={styles.container}>
                <ul className={styles.list} id='HallTwo'>
                <SpeakerCard
                        title={'Игорь'}
                        surname={'Баранов'}
                        text={'Проректор Сберуниверситета по обучению и исследованиям '}
                        image={image_1}
                    />
                    <SpeakerCard
                        title={'Марина'}
                        surname={'Деревлева'}
                        text={'Экс-руководитель Корп. университета, ПАО «СИБУР Холдинг»'}
                        image={image_2}
                    />
                    <SpeakerCard
                        title={'Татьяна'}
                        surname={'Ваньчкова'}
                        text={'Заместитель генерального директора по корпоративному обучению ANCOR'}
                        image={image_3}
                    />
                    <SpeakerCard
                        title={'Илья'}
                        surname={'Курмышев'}
                        text={'Директор образовательного бизнеса Группы Актион'}
                        image={image_4}
                    />
                </ul>
                <Switch
                    title={'Драйвер'}
                    image={circle}
                    handleClick={handleClick}
                    buttonText={buttonText}
                />
            </div>
            {isActive && <div className={styles.box_video}>
                <ReactPlayer 
                    width='100%'
                    height='100%'
                    className={styles.video} url='https://youtu.be/0cm2FvJoYtc' />
            </div>}
            <div className={styles.box_present}>
                <h3 className={styles.title_present}>Проекты представят:</h3>
                <ul className={styles.list_present}>
                    {arrDriver.map(item => {
                            const keyUid = uuidv4();
                        return (
                            <PresentProjects
                                key={keyUid}
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
import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import styles from './Novator.module.scss';
import BlockTitle from '../BlockTitle/BlockTitle';
import SpeakerCard from '../SpeakerCard/SpeakerCard';
import image_1 from '../../image/Novator/Lena_T.png';
import image_2 from '../../image/Novator/Andru_S.png';
import image_3 from '../../image/Novator/Danil_M.png';
import PresentProjects from '../PresentProjects/PresentProjects';
import { arrNovator } from '../../utils/data';
import Switch from '../Switch/Switch';
import circle from '../../image/Novator/circle.png';
import PresentProjectsBig from '../PresentProjectsBig/PresentProjectsBig';
import curl from '../../image/Driver/curl.png';
import treangle from '../../image/Novator/tre.png';
import { v4 as uuidv4 } from 'uuid';

export default function Novator() {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive)
    };

    const buttonText = isActive ? 'CВЕРНУТЬ ТРАНСЛЯЦИЮ' : 'СМОТРЕТЬ ТРАНСЛЯЦИЮ'

    return (
    <section className={styles.main} id="novator">
        <div className={styles.box}>
            <BlockTitle
                title={'Зал 5. Новатор'}
                text={'Проекты корпоративного обучения, направленные на развитие системы наставничества и преемственности'}
            />
            <h3 className={styles.title_present}>Жюри:</h3>
            <div className={styles.container}>
                <ul className={styles.list} id='HallFive'>
                <img className={styles.curl} src={curl} alt='фигура'/>
                <img className={styles.treangle} src={treangle} alt='фигура'/>    
                <SpeakerCard
                        title={'Елена'}
                        surname={'Тихомирова'}
                        text={'Руководитель ELearning center'}
                        image={image_1}
                    />
                    <SpeakerCard
                        title={'Андрей'}
                        surname={'Скуратов'}
                        text={'Руководитель Корпоративного университета, «МТС-Банк»'}
                        image={image_2}
                    />
                    <SpeakerCard
                        title={'Данил'}
                        surname={'Мяло'}
                        text={'Главный редактор направления Актион HR и Кадры Группы Актион'}
                        image={image_3}
                    />
                </ul>
                <Switch
                        title={'Новатор'}
                        image={circle}
                        handleClick={handleClick}
                        buttonText={buttonText}
                    />
            </div>
            {isActive && <div className={styles.box_video}>
                <ReactPlayer 
                    width='100%'
                    height='100%'
                    className={styles.video} url='https://youtu.be/OCjYRD1wH_4'/>
            </div>}
            <div className={styles.box_present}>
                <h3 className={styles.title_present}>Проекты представят:</h3>
                <ul className={styles.list_present}>
                    {arrNovator.map((item, index) => {
                        if(index !== 0 && index !== 4) {
                            const keyUid = uuidv4();
                            return (
                                <PresentProjects
                                    key={keyUid}
                                    title={item.title}
                                    text={item.text}
                                />
                                )
                        } else {
                            const keyUid = uuidv4();
                            return (
                                <PresentProjectsBig
                                    key={keyUid}
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
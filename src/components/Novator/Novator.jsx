import React, {useState} from 'react';
import styles from './Novator.module.scss'
import BlockTitle from '../BlockTitle/BlockTitle';
import SpeakerCard from '../SpeakerCard/SpeakerCard';
import image_1 from '../../image/Novator/Lena_T.png';
import image_2 from '../../image/Novator/Andru_S.png';
import image_3 from '../../image/Novator/Danil_M.png';
import PresentProjects from '../PresentProjects/PresentProjects';
import { arrNovator } from '../../utils/data';
import Switch from '../Switch/Switch';
import circle from '../../image/Novator/circle.png'

export default function Novator() {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive)
    };

    const buttonText = isActive ? 'CВЕРНУТЬ ТРАНСЛЯЦИЮ' : 'СМОТРЕТЬ ТРАНСЛЯЦИЮ'

    return (
    <section className={styles.main}>
        <div className={styles.box}>
            <BlockTitle
                title={'Зал 5. Новатор'}
                text={'Проекты корпоративного обучения, направленные на развитие системы наставничества и преемственности'}
            />
            <h3 className={styles.title_present}>Жюри:</h3>
            <div className={styles.container}>
                <ul className={styles.list}>
                <SpeakerCard
                        title={'Елена Тихомирова'}
                        text={'Руководитель ELearning center'}
                        image={image_1}
                    />
                    <SpeakerCard
                        title={'Андрей  Скуратов'}
                        text={'Руководитель Корпоративного университета, «МТС-Банк»'}
                        image={image_2}
                    />
                    <SpeakerCard
                        title={'Данил Мяло'}
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
            <div className={styles.box_present}>
                <h3 className={styles.title_present}>Проекты представят:</h3>
                <ul className={styles.list_present}>
                    {arrNovator.map((item, index) => {
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
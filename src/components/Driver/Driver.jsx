import React, {useState} from 'react';
import styles from './Driver.module.scss'
import BlockTitle from '../BlockTitle/BlockTitle';
import SpeakerCard from '../SpeakerCard/SpeakerCard';
import image_1 from '../../image/Driver/Igor_B.png';
import image_2 from '../../image/Driver/Marina_D.png';
import image_3 from '../../image/Driver/Tatiana_V.png';
import image_4 from '../../image/Driver/Ilia_K.png';
import PresentProjects from '../PresentProjects/PresentProjects';
import { arrDriver } from '../../utils/data';
import Switch from '../Switch/Switch';
import circle from '../../image/Driver/circle.png'

export default function Driver() {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive)
    };

    const buttonText = isActive ? 'CВЕРНУТЬ ТРАНСЛЯЦИЮ' : 'СМОТРЕТЬ ТРАНСЛЯЦИЮ'

    return (
    <section className={styles.main}>
        <div className={styles.box}>
            <BlockTitle
                title={'Зал 2. Драйвер'}
                text={'Проекты корпоративного обучения, направленные на развитие системы наставничества и преемственности'}
            />
            <h3 className={styles.title_present}>Жюри:</h3>
            <div className={styles.container}>
                <ul className={styles.list}>
                <SpeakerCard
                        title={'Игорь  Баранов'}
                        text={'Проректор Сберуниверситета по обучению и исследованиям '}
                        image={image_1}
                    />
                    <SpeakerCard
                        title={'Марина Деревлева'}
                        text={'Экс-руководитель Корп. университета, ПАО «СИБУР Холдинг»'}
                        image={image_2}
                    />
                    <SpeakerCard
                        title={'Татьяна  Ваньчкова'}
                        text={'Заместитель генерального директора по корпоративному обучению ANCOR'}
                        image={image_3}
                    />
                    <SpeakerCard
                        title={'Илья Курмышев'}
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
            <div className={styles.box_present}>
                <h3 className={styles.title_present}>Проекты представят:</h3>
                <ul className={styles.list_present}>
                    {arrDriver.map((item, index) => {
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
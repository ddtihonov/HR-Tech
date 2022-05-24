import React, {useState} from 'react';
import styles from './Slider.module.scss';
import image_1 from '../../image/Slider/Andr_S.png';
import image_2 from '../../image/Slider/Kat_B.png';
import image_3 from '../../image/Slider/Dan_M.png';
import image_4 from '../../image/Slider/Mari_L.png';
import image_5 from '../../image/Slider/Ai_K.png';
import image_6 from '../../image/Slider/I_K.png';
import image_7 from '../../image/Slider/E_P.png';
import image_8 from '../../image/Slider/R_B.png';
import image_9 from '../../image/Slider/S_S.png';
import image_10 from '../../image/Slider/Igo_Ba.png';
import image_11 from '../../image/Slider/Ta_Va.png';
import image_12 from '../../image/Slider/Il_De.png';
import image_13 from '../../image/Slider/An_Im.png';
import image_14 from '../../image/Slider/Ma_De.png';
import image_15 from '../../image/Slider/Ilia.jpg';

export default function Slider () {

    const arrSlider = [{foto : image_5, name: 'Айгюн Курбанова', work: 'Директор департамента персонала, член совета директоров, ООО «Восток-Запад»'}, {foto : image_2, name: 'Екатерина Барабанова', work: 'Директор по развитию персонала, ПАО «Ростелеком»'}, {foto : image_1, name: 'Андрей Скуратов', work: 'Руководитель Корпоративного университета, СПАО «Ингосстрах»'}, {foto : image_3, name: 'Данил Мяло', work: 'Главный редактор направления Актион HR и Кадры, Группа Актион'}, {foto : image_4, name: 'Марина Львова', work: 'Директор по организационному развитию, Группа компаний HeadHunter'}, {foto : image_6, name: 'Илья Курмышев', work: 'Директор образовательного бизнеса Группы Актион'}, {foto : image_7, name: 'Елена Позолотина', work: 'Директор Корпоративного университета ТМК2U, ПАО «ТМК»'},  {foto : image_8, name: 'Роман Баскин', work: 'Директор Корпоративного университета, ОАО «РЖД»'}, {foto : image_9, name: 'Сергей Сус', work: 'Директор по развитию Группы Актион'}, {foto : image_10, name: 'Игорь Баранов', work: 'Проректор Сберуниверситета по обучению и исследованиям'}, {foto : image_11, name: 'Татьяна Ваньчкова', work: 'Заместитель генерального директора по корпоративному обучению ANCOR'}, {foto : image_15, name: 'Илья Дементьев', work: 'Ректор Корпоративного университета, ПАО «Газпром нефть»'}, {foto : image_13, name: 'Анна Имас', work: 'Директор корпоративного бизнеса Группы Актион'}, {foto : image_14, name: 'Марина Деревлева', work: 'Экс-руководитель Корп. университета, ПАО «СИБУР Холдинг»'},]

    const [isCards, setIsCards] = useState(arrSlider);

    const handleCardLeft = () => {
        let copy = [...isCards];
        copy.push(copy.shift());
        setIsCards(copy);
    };

    const handleCardRight = () => {
        let copy = [...isCards];
        copy.unshift(copy.pop());
        setIsCards(copy);
    };

    return (
        <section className={styles.main} id="Hall">
            <div className={styles.box}>
                <h2 className={styles.title}>Участников Академии обучали и консультировали:</h2>
                <ul className={styles.list}>
                    <li className={styles.item_small}>
                        <img className={styles.image_small} src={isCards[0].foto} alt='фото'/>
                        <h5 className={styles.subtitle_small}>{isCards[0].name}</h5>
                        <p className={styles.text_small}>{isCards[0].work}</p>
                    </li>
                    <li className={styles.item_average}>
                        <img className={styles.image_average} src={isCards[1].foto} alt='фото'/>
                        <h5 className={styles.subtitle_average}>{isCards[1].name}</h5>
                        <p className={styles.text_average}>{isCards[1].work}</p>
                    </li>
                    <li className={styles.item}>
                    <img className={styles.image} src={isCards[2].foto} alt='фото'/>
                    <h5 className={styles.subtitle}>{isCards[2].name}</h5>
                    <p className={styles.text}>{isCards[2].work}</p>
                </li>
                <li className={styles.item_average}>
                    <img className={styles.image_average} src={isCards[3].foto} alt='фото'/>
                    <h5 className={styles.subtitle_average}>{isCards[3].name}</h5>
                    <p className={styles.text_average}>{isCards[3].work}</p>
                </li>
                <li className={styles.item_small}>
                    <img className={styles.image_small} src={isCards[4].foto} alt='фото'/>
                    <h5 className={styles.subtitle_small}>{isCards[4].name}</h5>
                    <p className={styles.text_small}>{isCards[4].work}</p>
                </li>
                </ul>
                <div className={styles.box_button}>
                    <button className={styles.button_left} type="button" onClick={handleCardRight}/>
                    <button className={styles.button} type="button" onClick={handleCardLeft}/>
                </div>
            </div>
        </section>
    )
}
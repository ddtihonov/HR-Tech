import React, {useState} from 'react';
import styles from './Slider.module.scss';
import image_1 from '../../image/Slider/Andr_S.png';
import image_2 from '../../image/Slider/Kat_B.png';
import image_3 from '../../image/Slider/Dan_M.png';
import image_4 from '../../image/Slider/Mari_L.png';
import image_5 from '../../image/Slider/Ai_K.png';

export default function Slider () {

    const arrSlider = [{foto : image_5, name: 'Айгюн Курбанова', work: 'Директор департамента персонала, член совета директоров, ООО «Восток-Запад»'}, {foto : image_2, name: 'Екатерина Барабанова', work: 'Директор по развитию персонала, ПАО «Ростелеком»'}, {foto : image_1, name: 'Андрей Скуратов', work: 'Руководитель Корпоративного университета, СПАО «Ингосстрах»'}, {foto : image_3, name: 'Данил Мяло', work: 'Главный редактор направления Актион HR и Кадры, Группа Актион'}, {foto : image_4, name: 'Марина Львова', work: 'Директор по организационному развитию, Группа компаний HeadHunter'}, ]

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
                    <button className={styles.button_left} type="button" onClick={handleCardLeft}/>
                    <button className={styles.button} type="button" onClick={handleCardRight}/>
                </div>
            </div>
        </section>
    )
}
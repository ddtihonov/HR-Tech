import React, {useState} from 'react';
import styles from './Slider.module.scss';
import image_1 from '../../image/Slider/Andr_S.png';
import image_2 from '../../image/Slider/Kat_B.png';
import image_3 from '../../image/Slider/Dan_M.png';
import image_4 from '../../image/Slider/Mari_L.png';
import image_5 from '../../image/Slider/Ai_K.png';

export default function Slider () {

    const [isVideo, setIsVideo] = useState();

    const arrSlider = [{foto : image_5, name: 'Айгюн Курбанова', work: 'Директор департамента персонала, член совета директоров, ООО «Восток-Запад»'}, {foto : image_2, name: 'Екатерина Барабанова', work: 'Директор по развитию персонала, ПАО «Ростелеком»'}, {foto : image_1, name: 'Андрей Скуратов', work: 'Руководитель Корпоративного университета, СПАО «Ингосстрах»'}, {foto : image_3, name: 'Данил Мяло', work: 'Главный редактор направления Актион HR и Кадры, Группа Актион'}, {foto : image_3, name: 'Данил Мяло', work: 'Главный редактор направления Актион HR и Кадры, Группа Актион'}, {foto : image_4, name: 'Марина Львова', work: 'Директор по организационному развитию, Группа компаний HeadHunter'}, ]

    let newArr = arrSlider

    let elementOne = newArr[0]

    console.log(elementOne)

    const handleCard = () => {
        elementOne = newArr[2]
        console.log('бабах')
    };

    return (
        <section className={styles.main} id="Hall">
            <div className={styles.box}>
                <h2 className={styles.title}>Участников Академии обучали и консультировали:</h2>
                <ul className={styles.list}>
                    <li className={styles.item_small}>
                        <img className={styles.image_small} src={elementOne.foto} alt='фото'/>
                        <h5 className={styles.subtitle_small}>{elementOne.name}</h5>
                        <p className={styles.text_small}>{elementOne.work}</p>
                    </li>
                    <li className={styles.item_average}>
                        <img className={styles.image_average} src={image_2} alt='фото'/>
                        <h5 className={styles.subtitle_average}>Екатерина Барабанова</h5>
                        <p className={styles.text_average}>Директор по развитию персонала, ПАО «Ростелеком»</p>
                    </li>
                    <li className={styles.item}>
                    <img className={styles.image} src={image_1} alt='фото'/>
                    <h5 className={styles.subtitle}>Андрей Скуратов</h5>
                    <p className={styles.text}>Руководитель Корпоративного университета, СПАО «Ингосстрах»</p>
                </li>
                <li className={styles.item_average}>
                    <img className={styles.image_average} src={image_3} alt='фото'/>
                    <h5 className={styles.subtitle_average}>Данил Мяло</h5>
                    <p className={styles.text_average}>Главный редактор направления Актион HR и Кадры, Группа Актион</p>
                </li>
                <li className={styles.item_small}>
                    <img className={styles.image_small} src={image_4} alt='фото'/>
                    <h5 className={styles.subtitle_small}>Марина Львова</h5>
                    <p className={styles.text_small}>Директор по организационному развитию, Группа компаний HeadHunter</p>
                </li>
                </ul>
                <div className={styles.box_button}>
                    <button className={styles.button_left} type="button" onClick={handleCard}/>
                    <button className={styles.button}/>
                </div>
            </div>
        </section>
    )
}
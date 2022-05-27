import React, {useCallback, useState, useEffect} from 'react';
import styles from './Slider.module.scss';
import { arrSlider } from '../../utils/data';

export default function Slider () {

    const [isCards, setIsCards] = useState(arrSlider);

    const handleCardLeft = useCallback(() => {
        setTimeout(() => {
            let copy = [...isCards];
            copy.push(copy.shift());
            setIsCards(copy);
    },
        100)
    }, [isCards]);

    const handleCardRight = useCallback(() => {
        setTimeout(() => {
        let copy = [...isCards];
        copy.unshift(copy.pop());
        setIsCards(copy);
        },
        100)    
    }, [isCards]);

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
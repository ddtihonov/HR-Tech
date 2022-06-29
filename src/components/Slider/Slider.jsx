
import React, {useCallback, useState, useEffect} from 'react';
import styles from './Slider.module.scss';
import { arrSlider } from '../../utils/data';
import { v4 as uuidv4 } from 'uuid';

export default function Slider () {

    const [isCards, setIsCards] = useState(arrSlider);
    const [paused, setPaused] = useState(false);
    
    useEffect(() => {
        const interval = setInterval (() => {
            if (!paused){
                let copy = [...isCards];
                copy.push(copy.shift());
                setIsCards(copy);
            }
        }, 3000) 
        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
})

    const handleCardLeft = useCallback(() => {
            let copy = [...isCards];
            copy.push(copy.shift());
            setIsCards(copy);
    }, [isCards]);

    const handleCardRight = useCallback(() => {
        let copy = [...isCards];
        copy.unshift(copy.pop());
        setIsCards(copy); 
    }, [isCards]);

    return (
        <section 
            className={styles.main} id="Hall"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
            <div className={styles.box}>
                <h2 className={styles.title}>Участников Академии обучали и консультировали:</h2>
                <ul className={styles.list}>
                    {isCards.map((item, index) => {
                        const keyUid = uuidv4();
                        if(index === 0 || index === 4) {
                            return (
                                <li className={styles.item_small} key={keyUid}>
                                    <img className={styles.image_small} src={item.foto} alt='фото'/>
                                    <h5 className={styles.subtitle_small}>{item.name}</h5>
                                    <p className={styles.text_small}>{item.work}</p>
                                </li>
                            )}

                            if(index === 1 || index === 3) {
                                return (
                                    <li className={styles.item_average} key={keyUid}>
                                        <img className={styles.image_average} src={item.foto} alt='фото'/>
                                        <h5 className={styles.subtitle_average}>{item.name}</h5>
                                        <p className={styles.text_average}>{item.work}</p>
                                    </li>
                                )   
                            }

                            if(index === 2) {
                                return (
                                    <li className={styles.item} key={keyUid}>
                                        <img className={styles.image} src={item.foto} alt='фото'/>
                                        <h5 className={styles.subtitle}>{item.name}</h5>
                                        <p className={styles.text}>{item.work}</p>
                                    </li>
                                )   
                                
                            }
                        })}
                </ul>
                <div className={styles.box_button}>
                    <button className={styles.button_left} type="button" onClick={handleCardRight}/>
                    <button className={styles.button} type="button" onClick={handleCardLeft}/>
                </div>
            </div>
        </section>
    )
}
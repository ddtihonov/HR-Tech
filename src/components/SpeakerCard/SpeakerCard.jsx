import React from 'react';
import styles from './SpeakerCard.module.scss';
import PropTypes from 'prop-types';

export default function SpeakerCard({title, text, image, surname}) {

    return (
    <li className={styles.item}>
        <div className={styles.info}>
            <h5 className={styles.title}>{title}</h5>
            <h5 className={styles.surname}>{surname}</h5>
            <img className={styles.image} src={image} alt='человек'/>
        </div>
        <p className={styles.text}>{text}</p>
    </li>
);
}

SpeakerCard.propTypes = {
    text:  PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
};
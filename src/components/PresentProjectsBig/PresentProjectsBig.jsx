import React from 'react';
import styles from './PresentProjectsBig.module.scss';
import PropTypes from 'prop-types';


export default function PresentProjectsBig({title, text}) {

    return (
        <li className={styles.item}>
            <h5 className={styles.title}>{title}</h5>
            <p className={styles.text} >{text}</p>
        </li>
    )
}

PresentProjectsBig.propTypes = {
    text:  PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
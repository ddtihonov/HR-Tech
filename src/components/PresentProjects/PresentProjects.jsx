import React from 'react';
import styles from './PresentProjects.module.scss';
import PropTypes from 'prop-types';


export default function PresentProjects({title, text}) {

    return (
        <li className={styles.item}>
            <h5 className={styles.title}>{title}</h5>
            <p className={styles.text} >{text}</p>
        </li>
    )

}

PresentProjects.propTypes = {
    text:  PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
import React from 'react';
import styles from './BlockTitle.module.scss';
import PropTypes from 'prop-types';

export default function BlockTitle({title, text}) {

    return (
    <div className={styles.box_info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
    </div>
);
}

BlockTitle.propTypes = {
    text:  PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
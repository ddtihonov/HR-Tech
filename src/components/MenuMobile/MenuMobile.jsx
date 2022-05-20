import React from "react";
import { Link } from 'react-router-dom';
import styles from './MenuMobile.module.scss'
import PropTypes from 'prop-types';

export default function MenuMobile ({onClose}) {

    return (
        <section className={styles.main}>
            
        </section>
    )
}

MenuMobile.propTypes = {
    onClose: PropTypes.func.isRequired,
};
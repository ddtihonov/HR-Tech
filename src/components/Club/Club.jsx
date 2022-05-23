import React from 'react';
import styles from './Club.module.scss';

export default function Club () {


    return (
        <section className={styles.main} id="Club">
            <div className={styles.box}>
                <div className={styles.box_info}>
                    <h2 className={styles.title}>Клуб Актион HRTech</h2>
                    <p className={styles.text}>Вступайте в сообщество Актион HRTech во ВКонтакте, где размещены все записи прошедших мероприятий и полезные материалы. В группе можно обмениваться опытом и создавать дискуссии. В Клубе Актион HRTech будет объявлено</p> 
                    <p className={styles.text}>о новом наборе в Актион Акселератор и <span className={styles.text_blue}>старте программы профессиональной переподготовки «Директор по обучению и развитию персонала».</span>
                    </p>
                    <a className={styles.link} target='_blank' rel='noopener noreferrer' href='https://vk.com/actionhrtech'>Вступить в Клуб</a>
                </div>
            </div>
        </section>
    )
}
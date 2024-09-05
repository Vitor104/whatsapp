import React from "react";
import styles from './intro.module.css';
import logo from './whatsapp.png';

function Intro () {
    return (
        <div class={styles.container}>
            
            <div className={styles.top}>
                <div className={styles.logoAndName}>
                    <img className={styles.logo} src={logo} alt="logo" />
                    <h1 className={styles.name}>Whatsapp Web</h1>
                </div>
            </div>
            <div className={styles.window}>

            </div>
        </div>
    )
}

export default Intro;
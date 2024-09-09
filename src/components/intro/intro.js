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
                <div className={styles.inicio}>
                    <section class='w-50'>
                        <h3 className={`text-dark ${styles.textoh3}`}>Baixar o WhatsApp para Windows</h3>
                            <p className={styles.texto}>Faça ligações, use o compartilhamento de tela e tenha uma experiência de uso mais rápida com o novo app para Windows.</p>
                    </section>
                    <section>
                        <button type="button" href='#' class="btn btn-success btn-lg w-100">Baixar o app</button>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Intro;
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
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
</svg>
                    <section class='w-50'>
                        <h3 className={`text-dark ${styles.textoh3}`}>Baixar o WhatsApp para Windows</h3>
                            <p className={styles.texto}>Faça ligações, use o compartilhamento de tela e tenha uma experiência de uso mais rápida com o novo app para Windows.</p>
                    </section>
                    <section>
                        <button type="button" href='#' class="btn btn-success btn-lg w-100">Baixar o app</button>
                    </section>
                </div>
                <div className={styles.informacoes}>
                    <section>
                        <h3>Use o WhatsApp no seu computador</h3>
                    </section>
                    <section>
                        <ol className={styles.list}>
                            <li>Abra o WhatsApp no seu celular.</li>
                            <li>Toque em <strong>Mais opções </strong>
                            <span className={styles.detail}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical enter bg-light" viewBox="0 0 16 16">
                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                            </svg>
                            </span>  no Android ou em <strong>Configurações </strong>
                            <span className={styles.detail}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-wide-connected center bg-light" viewBox="0 0 16 16">
                                <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5m0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78zM5.048 3.967l-.087.065zm-.431.355A4.98 4.98 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8zm.344 7.646.087.065z"/>
                                </svg>
                            </span>  no iPhone.</li>   
                             
                            <li>Toque em <strong>Dispositivos conectados</strong>  e, em seguida, em <strong>Conectar dispositivo.</strong></li>
                            <li>Aponte seu celular para esta tela para escanear o QR code.</li>
                        </ol>
                        
                    </section>
                    <hr class='border border-secondary w-100'/>
                    <p class='text-success'>Conectar com número de telefone</p>
                </div>

            </div>
        </div>
    )
}

export default Intro;
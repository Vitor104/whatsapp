import React from "react";
import styles from './intro.module.css';
import IntroWindow from "../introWindow/introWindow";

function Intro () {
    return (
        <div class='container-fluid'>
            
            <div class='row bg-success'>
                <div class='col py-5 vh-30'>
                        <h1>NO</h1>                        
                </div>
            </div>
            <IntroWindow />            
            <div class='row bg-gradient-secondary'></div>
        </div>
    )
}

export default Intro;
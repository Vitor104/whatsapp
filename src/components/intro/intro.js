import React from "react";
import './intro.module.css';
import IntroWindow from "../introWindow/introWindow";

function Intro () {
    return (
        <div class='container-fluid'>
            <IntroWindow />
            <div class='row bg-success'>
                <div class='col py-5 vh-30'>
                        <h1>NO</h1>                        
                </div>
            </div>
                        
            <div class='row bg-gradient-secondary'></div>
        </div>
    )
}

export default Intro;
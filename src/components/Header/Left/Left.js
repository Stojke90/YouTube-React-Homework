import React from 'react';
import './Left.css';
import { hamburgerMenu, logo } from '../../Image/Img';



export const Left = () => {
    
	    const dropMenuHamburger = () => {
      const a = document.getElementById('hamMenu');
            const aside = document.querySelector('aside');
                if(aside.className === "visible"){
                    a.style.animation = 'turn 1.5s linear';
                    aside.style.animation = 'example 1.5s ease-in 0s 1 normal none running';
                    setTimeout(() => {
                    aside.className = "nonVisible";
                    aside.style.animation = 'none';
                    a.style.animation = 'none';
                },1499);
            }else {
                    a.style.animation = 'turn 1.5s linear';
                    aside.style.animation = 'example2 1.5s ease-out 0s 1 normal none running';
                    aside.className = "visible";
                    setTimeout(() => {
                    aside.style.animation = 'none';
                    a.style.animation = 'none';
            },1499);
    }
}

    return (

    	<section id="left">
            <img onClick={dropMenuHamburger} alt="hamburger_menu" id="hamMenu" src={hamburgerMenu} />
            <img alt="YouTube_logo" id="logo" src={logo} />
        </section>

    )
}
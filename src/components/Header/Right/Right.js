import React from 'react';
import './Right.css';


export const Right = () => {

	const signIn = () => {

        const signUpButt = document.getElementById('signUpButt');

            let mail = prompt("Put your email address");
            localStorage.setItem("address", mail);
            signUpButt.innerText = localStorage.getItem('address');
            if(signUpButt.innerText === ''){
               signUpButt.innerText = 'Sign in YouTube';
            }else {
                signUpButt.style.borderRadius = "10px";
                signUpButt.style.borderColor = '#f0f8ff';
            }
    }

    return(

    	<section id="right">
            <button id="signUpButt" onClick={signIn}>Sign in YouTube</button>
        </section>

    )
}
import React from 'react';
import './Header.css';
import { Left } from './Left/Left';
import { Center } from './Center/Center';
import { Right } from './Right/Right';

const Header = ({ onClick }) => {


	return (

    <header>
        <section id="container">
            <Left />
            <Center onClick={onClick}/>
            <Right />
        </section>
    </header>
    
	)
}

export { Header };

import React from 'react';
import { magnifyingGlass } from '../../../Image/Img';

export const Button = ({onClick}) => {
	return (
		<button id="searchLoop" onClick={onClick}>
            <img id="imgMagnifyingGlass" alt="imgMagnifyingGlass" src={magnifyingGlass} />
        </button>
	)
}
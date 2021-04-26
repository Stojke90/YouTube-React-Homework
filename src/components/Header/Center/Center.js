import React, { useState } from 'react';
import './Center.css';
import { Button } from './Button/Button';

export const Center = ({ onClick }) => {

  const [inputValue, setInputValue] = useState('');
  const pickInputValue = event => setInputValue(event.target.value);
  const sendInputValue = () => onClick(inputValue);
  const handleKeyDown = e => {
    if (e.key === "Enter") {
      sendInputValue();
    }
  };
	return (

		<section id="center">

            <input 
	            id="searchInput" 
	            type="text" 
	            name="search" 
	            placeholder="Search videos...."
              required="required"
       			  value={inputValue}
       			  onChange={pickInputValue}
              onKeyPress={handleKeyDown}
            />
            <Button onClick={sendInputValue}/>     
        </section>
	)
}

 
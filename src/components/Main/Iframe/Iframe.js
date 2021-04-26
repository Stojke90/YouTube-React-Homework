import React from 'react';
import './Iframe.css';

export const Iframe = props => {
	
	const fun = (e) => {
			const element = e.split("T").join(" ").split("Z");
		return element;
	}

	return(

		<div id="frame" >
	        <iframe 
	        	width="560" 
	        	height="415" 
	        	src={`https://www.youtube.com/embed/${props.id.id}`}
	        	frameBorder="0" 
	        	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
	        	allowFullScreen 
	        	title="Video Play">
	        </iframe>
	        <p>{props.id.title}</p>
	        <p>{fun(props.id.publishedAt)}</p>
	        <p>{props.id.channelTitle}</p>
	        <p>{props.id.description}</p>
	    </div>

	)
}
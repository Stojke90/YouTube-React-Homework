import React, { useState } from 'react';
import './Main.css';
import { Menu } from './Menu/Menu';
import { Videos } from './Videos/Videos';
import { Iframe } from './Iframe/Iframe';
import { loadVideo } from '../../general';
import axios from 'axios';
import { apiKey } from '../../general';


const Main = (props) => {  

    const [activeVideo, setActiveVideo] = useState(null);
    const [relative, setRelative] = useState(null);

	const onItemClick = (title, publishedAt, channelTitle, description, id) =>{
		setActiveVideo({title, publishedAt, channelTitle, description, id})
		loadRelativeVideos(id)
	} 
	
	const loadRelativeVideos = (id) => {

			return	axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&relatedToVideoId=${id}&type=video&key=${apiKey}`)

			.then(data => {setRelative(data)})

			.catch(error => alert(error));
	}

	return (
	    <main>
	    	<Menu />
	    	<Videos set={props} onItemClick={onItemClick} rel={relative}/>
	    	{activeVideo && <Iframe id={activeVideo} set={setTimeout(loadVideo)}/>}
	    </main>
		)
}

export { Main }
import React from 'react';
import './Videos.css';
import { DataVideos } from '../DataVideos/DataVideos';
import uuid from 'react-uuid';

export const Videos = (props) => {
	
	const makingVideos = videos => {
		return videos.map(data => <DataVideos 
											data={data} 
												key={uuid()}
													onItemClick={props.onItemClick}
											/>)									
	}

	return (

		<section id="videos">
	        <div className="video-list">{props.rel === null ? makingVideos(props.set.data) : 
	        makingVideos(props.rel.data.items)}</div>
	    </section>

	)
}


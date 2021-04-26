import React from 'react';


export const DataVideos = (props) => {

const path = props.data;

	return(
			<section className='dataVideo'>
				<img className='imgOfVideo' 
						src={path.snippet.thumbnails.medium.url} 
							alt='video_image'
								onClick={() => props.onItemClick(
												path.snippet.title,
													path.snippet.publishedAt, 
														path.snippet.channelTitle, 
															path.snippet.description, 
																path.id.videoId)
										}
				/>
					<article>
						<h2>{path.snippet.title}</h2>
						<p>{path.snippet.description}</p>
						<p>{path.snippet.channelTitle}</p>
					</article>
			</section>
	)
}

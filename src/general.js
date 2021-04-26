export const search = document.getElementById('searchInput');
export const buttSearchLoop = document.getElementById('searchLoop');
export const divFrame = document.getElementById('frame');
export const apiKey = "AIzaSyD0DfFZ42LRVAPI0rbGRvmiQC_lwP1XsrY";
export const videos = document.getElementById('videos');
export const videoPreview = document.querySelector('iframe');
export const videoList = document.querySelector('.video-list');
export const titlePrewVideo = document.createElement('p');
export const publishedAt = document.createElement('p');
export const channelTitle = document.createElement('p');
export const description = document.createElement('p');
export const keyCode = 13;

export const li1 = [
	{text:"Home", id:1},
	{text:"Trending", id:2},
	{text:"Subscriptions", id:3}
];

export const li2 = [
	{text: "Library", id:4},
	{text: "History", id:5},
	{text: "Your videos", id:6},
	{text: "Watch later", id:7},
	{text: "Liked videos", id:8}
];


export	const loadVideo = () => {

		const videos = document.getElementById('videos').classList.add('videosWhenLoad');

		const videoPreview = document.querySelector('iframe').classList.add('startVideo');
			
        const videoCard = document.querySelectorAll('section .dataVideo').forEach((e, i) => { e.classList.add('nesto'); });

        const videoCardText = document.querySelectorAll('section .dataVideo article p').forEach((e, i) => { e.style.display = 'none'; });

        const videoCardTitle = document.querySelectorAll('section .dataVideo article h2').forEach((e, i) => { e.style.fontSize = '100%'; });

        const videoCardTitle1 = document.querySelectorAll('.dataVideo img').forEach((e, i) => { e.style.width = '50%'; });

        const videoCardTitle2 = document.querySelectorAll('.dataVideo article').forEach((e, i) => { e.style.width = '50%'; });

        const divFrame = document.getElementById('frame').style.display = 'block';

        const videoList = document.querySelector('.video-list').style.display = 'block';

	}

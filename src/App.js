import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { apiKey } from './general';
import axios from 'axios';

const App = () => {

	const [data, setData] = useState([]);

	const getData = (inputSearcValue) => {
		return	axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=16&order=date&q=${inputSearcValue}&videoDefinition=any&videoDimension=any&videoType=any&key=${apiKey}`)
				.then(data => {data.status === 200 || data.status === 201 ? setData(data.data.items) : alert('Error status is not good.')})
				.catch(error => {alert(error);});
	}

    return (
			    <>
				    <Header onClick={getData}/>
				    <Main data={data}/>
			    </>
            )
}

export default App;
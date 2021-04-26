import React from 'react';
import uuid from 'react-uuid';
import { Items } from './ListItems/ListItems';
import './Menu.css';
import {li1,li2} from '../../../general';

export const Menu = () => {

	const listItems = text => {
		return text.map(data => <Items key={uuid()} text={data.text} />)
	}

	return (

		<aside className="visible">
		    <ul className="list">{listItems(li1)}</ul>
		    <ul className="list">{listItems(li2)}</ul>
	    </aside>

	)
}
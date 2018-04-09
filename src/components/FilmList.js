import React from 'react';
import { Link } from 'react-router-dom';

export const FilmList = (props) => (
	<ul>
		{props.items.map((item, i) => <li key={i}><Link to={`${props.path}/${item.id}`}>{item.title}</Link></li>)}
	</ul>
);




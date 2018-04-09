import React from 'react';
import { Link } from 'react-router-dom';

export const ItemList = (props) => (
	<ul>
		{props.items.map((item, i) => <li key={i}><Link to={`${props.path}/${item.id}`}>{item.name}</Link></li>)}
	</ul>
);




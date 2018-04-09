import React from 'react';

const ItemDetail = (props) => (
	<ul>
		{Object.keys(props.item).map((k, i) => <li>{k}: {props.item[k]}</li>)}
	</ul>
);


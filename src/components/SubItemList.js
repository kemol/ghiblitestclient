import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles/Styles';

export const SubItemList = (props) => (
	<ul style={styles.spanUl}>
		{props.items.map((item, i) => <li key={i} style={styles.spanLi}><Link to={`${props.path}/${item.id}`} style={styles.spanLiLink}>{item.name}</Link></li>)}
	</ul>
);

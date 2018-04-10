import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles/Styles';

export const FilmList = (props) => (
	<ul style={styles.ul}>
		{
			props.items.map((item, i) => 
			(
				<li key={i} style={styles.li}><Link to={`${props.path}/${item.id}`} style={styles.liLink}>{item.title}<span style={styles.liSpan}>{item.release_date}</span></Link></li>)
			)
		}
	</ul>
);




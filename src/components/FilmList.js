import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles/Styles';

export const FilmList = (props) => (
	<ul style={styles.ul}>
		{
			props.items.map((item, i) => 
			(
				<li key={i} style={styles.li}>
					<Link to={`${props.path}/${item.id}`} style={styles.liLink}>
						<span style={styles.titleSpan}>{item.title}</span>
						<span style={styles.rtSpan}>{item.rt_score}</span>
						<span style={styles.dateSpan}>{item.release_date}</span>
					</Link>
				</li>
			))
		}
	</ul>
);




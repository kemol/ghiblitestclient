import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { styles } from '../styles/Styles';

export const ItemList = (props) => (
	<ul style={styles.ul}>
		{
			props.items.map((item, i) => 
			(
				<li key={i} style={styles.li}>
					<Link to={`${props.path}/${item.id}`} style={styles.liLink}>{item.name}</Link>
				</li>
			))
		}
	</ul>
);

ItemList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	path: PropTypes.string.isRequired
};



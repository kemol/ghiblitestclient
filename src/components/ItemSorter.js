import React from 'react';
import PropTypes from 'prop-types';
import { styles } from '../styles/Styles';

export const ItemSorter = (props) => (
		<button onClick={props.sort} style={{...styles.button, ...props.style}}>{props.text}</button>
);

ItemSorter.propTypes = {
	sort: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
	style: PropTypes.object
};

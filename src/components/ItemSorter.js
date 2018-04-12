import React from 'react';
import { styles } from '../styles/Styles';

export const ItemSorter = (props) => (
		<button onClick={props.sort} style={{...styles.button, ...props.style}}>{props.text}</button>
);

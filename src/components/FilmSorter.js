import React from 'react';
import { styles } from '../styles/Styles';

export const FilmSorter = (props) => (
	<div style={styles.sorter}>
		<button onClick={props.sortTitle} style={{...styles.button, ...styles.light}}>title</button>
		<button onClick={props.sortScore} style={{...styles.button, ...styles.medium}}>rt score</button>
		<button onClick={props.sortDate} style={{...styles.button, ...styles.dark}}>release date</button>
	</div>
);

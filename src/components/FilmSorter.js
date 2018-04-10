import React from 'react';
import { styles } from '../styles/Styles';

export const FilmSorter = (props) => (
	<div>
		<label style={styles.label}>sort by</label>
		<button onClick={props.sortTitle} style={styles.button}>title</button>
		<button onClick={props.sortDate} style={styles.button}>release date</button>
	</div>
);

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { FilmListContainer } from './FilmListContainer';
import { FilmDetailContainer } from './FilmDetailContainer';
import { styles } from '../styles/Styles';

export const FilmContainer = (props) => (
	<section style={styles.section}>
		<Switch>
    	<Route path={props.match.path} exact component={FilmListContainer} />
    	<Route path={`${props.match.path}/:id`} component={FilmDetailContainer} />
 	  </Switch>
	</section>
);



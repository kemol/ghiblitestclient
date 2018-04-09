import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { FilmListContainer } from './FilmListContainer';
import { FilmDetailContainer } from './FilmDetailContainer';

export const FilmContainer = (props) => (
			<div>
				<Switch>
         	<Route path={props.match.path} exact component={FilmListContainer} />
        	<Route path={`${props.match.path}/:id`} component={FilmDetailContainer} />
 	    	</Switch>
			</div>
		);



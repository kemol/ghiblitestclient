import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ItemListContainer } from './ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer';

export const ItemContainer = (props) => (
	<section>
		<h4>{props.match.path.substring(1, props.match.path.length)}</h4>
		<Switch>
   		<Route path={props.match.path} exact component={ItemListContainer} />
	   	<Route path={`${props.match.path}/:id`} component={ItemDetailContainer} />
 		</Switch>
 	</section>
);



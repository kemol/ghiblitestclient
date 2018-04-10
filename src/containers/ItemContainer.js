import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ItemListContainer } from './ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer';
import { styles } from '../styles/Styles';

export const ItemContainer = (props) => (
	<section style={styles.section}>
		<h4 style={styles.h4}>{props.match.path.substring(1, props.match.path.length)}</h4>
		<Switch>
   		<Route path={props.match.path} exact component={ItemListContainer} />
	   	<Route path={`${props.match.path}/:id`} component={ItemDetailContainer} />
 		</Switch>
 	</section>
);



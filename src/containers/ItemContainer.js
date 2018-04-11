import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ItemListContainer } from './ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer';
import { styles } from '../styles/Styles';

export const ItemContainer = (props) => (
	<section style={styles.section}>
		<Switch>
   		<Route path={props.match.path} exact component={ItemListContainer} />
	   	<Route path={`${props.match.path}/:id`} component={ItemDetailContainer} />
 		</Switch>
 	</section>
);



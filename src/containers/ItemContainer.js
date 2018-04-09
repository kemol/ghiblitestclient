import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ItemListContainer } from './ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer';

export const ItemContainer = (props) => (
			<div>
				<Switch>
         	<Route path={props.match.path} exact component={ItemListContainer} />
        	<Route path={`${props.match.path}/:id`} component={ItemDetailContainer} />
 	    	</Switch>
			</div>
		);



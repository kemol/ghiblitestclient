import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ListContainer } from './ListContainer';
import { DetailContainer } from './DetailContainer';

export const ItemContainer = (props) => (
			<div>
				<Switch>
         	<Route path={props.match.path} exact component={ListContainer} />
        	<Route path={`${props.match.path}/:id`} component={DetailContainer} />
 	    	</Switch>
			</div>
		);



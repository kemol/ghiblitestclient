import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ItemContainer } from './ItemContainer';
import { MenuContainer } from './MenuContainer';
/*
const FilmsContainer = () => <ListContainer type="films" />;
const PeopleContainer = () => <ListContainer type="people" />;
const LocationsContainer = () => <ListContainer type="locations" />;
const VehiclesContainer = () => <ListContainer type="vehicles" />;
*/
export const MainContainer = props => (
	<div>
		<MenuContainer />
  	<div className="main-layout">
    	<main>
      	  <Switch>
        	  <Route path="/films" component={ItemContainer} />
          	<Route path="/people" component={ItemContainer} />
  	        <Route path="/locations" component={ItemContainer} />
    	      <Route path="/vehicles" component={ItemContainer} />
      	    <Redirect to="/films" />
        	</Switch>
  	  </main>
	  </div>
  </div>
);

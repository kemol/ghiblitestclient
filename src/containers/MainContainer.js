import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ListContainer } from './ListContainer';
import { MenuContainer } from './MenuContainer';

const FilmsContainer = () => <ListContainer item="films" />;
const PeopleContainer = () => <ListContainer item="people" />;
const LocationsContainer = () => <ListContainer item="locations" />;
const VehiclesContainer = () => <ListContainer item="vehicles" />;

export const MainContainer = props => (
	<div>
		<MenuContainer />
  	<div className="main-layout">
    	<main>
      	  <Switch>
        	  <Route path="/films" component={FilmsContainer} />
          	<Route path="/people" component={PeopleContainer} />
  	        <Route path="/locations" component={LocationsContainer} />
    	      <Route path="/vehicles" component={VehiclesContainer} />
      	    <Redirect to="/films" />
        	</Switch>
  	  </main>
	  </div>
  </div>
);

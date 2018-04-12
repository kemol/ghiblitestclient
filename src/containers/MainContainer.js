import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Constants } from '../Constants';
import { FilmContainer } from './FilmContainer';
import { ItemContainer } from './ItemContainer';
import { MenuContainer } from './MenuContainer';

export const MainContainer = () => (
	<div>
		<MenuContainer />
    <main>
      <Switch>
     	  <Route path={`/${Constants.items.films}`} component={FilmContainer} />
       	<Route path={`/${Constants.items.people}`} component={ItemContainer} />
       	<Route path={`/${Constants.items.species}`} component={ItemContainer} />
  	    <Route path={`/${Constants.items.locations}`} component={ItemContainer} />
        <Route path={`/${Constants.items.vehicles}`} component={ItemContainer} />
        <Redirect to={`/${Constants.items.films}`} />
     	</Switch>
  	</main>
  </div>
);

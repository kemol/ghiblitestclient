import React from 'react';
import { Link } from 'react-router-dom';
import { Constants } from '../Constants';

export const MenuContainer = () => (
	<header>
		<h1>{Constants.headerMain}</h1>
		<h2>{Constants.headerSub}</h2>
		<nav>
     <Link to={`/${Constants.items.films}`}>{Constants.items.films}</Link>
     <Link to={`/${Constants.items.people}`}>{Constants.items.people}</Link>
     <Link to={`/${Constants.items.species}`}>{Constants.items.species}</Link>
     <Link to={`/${Constants.items.locations}`}>{Constants.items.locations}</Link>
     <Link to={`/${Constants.items.vehicles}`}>{Constants.items.vehicles}</Link>
    </nav>
	</header>
);


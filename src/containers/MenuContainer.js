import React from 'react';
import { Constants } from '../Constants';
import { NavLink } from '../components/NavLink';
import { styles } from '../styles/Styles';

export const MenuContainer = () => (
	<header style={styles.header}>
		<h1 style={styles.h1}>{Constants.headerMain}</h1>
		<h2 style={styles.h2}>{Constants.headerSub}</h2>
		<nav>
			<NavLink path={Constants.items.films} />
			<NavLink path={Constants.items.people} />
			<NavLink path={Constants.items.species} />
			<NavLink path={Constants.items.locations} />
			<NavLink path={Constants.items.vehicles} />
    </nav>
	</header>
);


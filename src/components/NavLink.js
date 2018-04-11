import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles/Styles';

export const NavLink = (props) => {
	let activeStyle = window.location.pathname.includes(props.path) ? styles.active : {};
	return <Link to={`/${props.path}`} style={{...styles.navLink, ...activeStyle}}>{props.path}</Link>
};


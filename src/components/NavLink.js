import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles/Styles';

export const NavLink = (props) => <Link to={`/${props.path}`} style={styles.navLink}>{props.path}</Link>;


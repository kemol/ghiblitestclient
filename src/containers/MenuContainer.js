import React from 'react';
import { Link } from 'react-router-dom';

export const MenuContainer = () => (
	<div>
		<ul>
     <li><Link to="/films">films</Link></li>
     <li><Link to="/people">people</Link></li>
     <li><Link to="/species">species</Link></li>
     <li><Link to="/locations">locations</Link></li>
     <li><Link to="/vehicles">vehicles</Link></li>
    </ul>
	</div>
);


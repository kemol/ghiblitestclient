import React from 'react';
import { Constants } from '../Constants';
import { ItemList } from './ItemList';

export const ItemDetail = (props) => (
	<ul>
		{
			Object.keys(props.item).map((k, i) => 
			(
				!Constants.excludeKeys.includes(k) ?
					(Array.isArray(props.item[k]) && props.item[k].length > 0 ?
						<li key={i}>{k}: <ItemList path={`/${props.item[k][0].type}`} items={props.item[k]} /></li> :
						<li key={i}>{k.replace("_", " ")}: {props.item[k]}</li>) :
					<li key={i} style={{display: "none"}}></li>				
			))
		}
	</ul>
);


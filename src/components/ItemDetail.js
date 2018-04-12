import React from 'react';
import PropTypes from 'prop-types';
import { Constants } from '../Constants';
import { SubItemList } from './SubItemList';
import { styles } from '../styles/Styles';

export const ItemDetail = (props) => (
	<ul style={styles.ul}>
		{
			Object.keys(props.item).map((k, i) => 
			(
				!Constants.excludeKeys.includes(k) ?
					(Array.isArray(props.item[k]) && props.item[k].length > 0 ?
						<li key={i} style={styles.detailLi}>
							<span style={styles.keySpan}>{k.replace("_", " ")}</span>
							<span style={styles.valueSpan}>
								<SubItemList path={`/${props.item[k][0].type}`} items={props.item[k]} />
							</span>
						</li> :
						<li key={i} style={styles.detailLi}>
							<span style={styles.keySpan}>{k.replace("_", " ")}</span>
							<span style={styles.valueSpan}>{props.item[k]}</span>
						</li>) :
					<li key={i} style={{display: "none"}}></li>				
			))
		}
	</ul>
);

ItemDetail.propTypes = {
	item: PropTypes.object.isRequired
};


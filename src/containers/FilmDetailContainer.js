import React from 'react';
import { ItemDetail } from '../components/ItemDetail';

const apiBase = "https://ghibliapi.herokuapp.com";

export class FilmDetailContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { item: [] };
		
		this.getItemDetails = this.getItemDetails.bind(this);
	}
	
	getItemDetails(item) {
	
	}
	
	componentDidMount() {
		const endpoint = `${apiBase}${this.props.match.url}`;
  	fetch(endpoint)
      .then(response => response.json())
      .then(result => this.getItemDetails(result ));
	}
	
	render() {
		return (
			<div>
  	    <ItemDetail item={this.state.item} />
			</div>
		);
	}
}


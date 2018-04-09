import React from 'react';
import { ItemList } from '../components/ItemList';

export class ItemListContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { items: [] };
		this.fetchItems = this.fetchItems.bind(this);
	}
	
	fetchItems(path) {
		const endpoint = `https://ghibliapi.herokuapp.com${path}`;
  	fetch(endpoint)
      .then(response => response.json())
      .then(results => this.setState({ items: results }));
	}

	componentDidMount() {
		this.fetchItems(this.props.match.path);
	}
	
	componentWillReceiveProps(nextProps) {
		if (nextProps.match.path !== this.props.match.path) {
			this.fetchItems(nextProps.match.path);
		}
	}
	
	render() {
		return (
			<div>
  	    <ItemList path={this.props.match.path} items={this.state.items} />
			</div>
		);
	}
}


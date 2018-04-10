import React from 'react';
import { Constants } from '../Constants';
import { ItemList } from '../components/ItemList';

export class ItemListContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { items: [] };
		this.fetchItems = this.fetchItems.bind(this);
	}
	
	fetchItems(path) {
		const endpoint = `${Constants.apiBase}${path}`;
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
		return <ItemList path={this.props.match.path} items={this.state.items} />;
	}
}


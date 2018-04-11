import React from 'react';
import { Fetcher } from '../Fetcher';
import { ItemList } from '../components/ItemList';

export class ItemListContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { items: [] };
	}
	
	async fetchItems(path) {
		Fetcher.fetch(path)
    	.then(items => this.setState({ items: items}))
			.catch(reason => console.log(reason.message));
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


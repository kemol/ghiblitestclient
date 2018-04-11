import React from 'react';
import { Constants } from '../Constants';
import { Fetcher } from '../Fetcher';
import { ItemList } from '../components/ItemList';

export class ItemListContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { items: [] };
	}
	
	async fetchItems(path) {
		Fetcher.fetch(path)
    	.then(results => this.sortResults(results))
			.catch(reason => console.log(reason.message));
	}
	
	sortResults(results, up = true) {
		if (results.length > 0) {
			let key = "name" in results[0] ? "name" : "title";
			let items = results.sort((a, b) => {
				let titleA = a[key].replace(Constants.theRegex, "");
				let titleB = b[key].replace(Constants.theRegex, "");
				return up ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
			});
			
			this.setState({ items: items });
		}
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


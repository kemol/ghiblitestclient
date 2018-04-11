import React from 'react';
import { Fetcher } from '../Fetcher';
import { ItemDetail } from '../components/ItemDetail';

export class ItemDetailContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { item: [] };
	}
	
	async fetchDetail(path) {
		Fetcher.fetch(path)
    	.then(item => this.setState({ item: item}))
			.catch(reason => console.log(reason.message));
	}

	componentDidMount() {
		this.fetchDetail(this.props.match.url);
	}
	
	componentWillReceiveProps(nextProps) {
		if (nextProps.match.url !== this.props.match.url) {
			this.fetchDetail(nextProps.match.url);
		}
	}
	
	render() {
		return <ItemDetail item={this.state.item} />;
	}
}


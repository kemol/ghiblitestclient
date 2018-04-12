import React from 'react';
import { Constants } from '../Constants';
import { ErrorDisplay } from '../components/ErrorDisplay';
import { Fetcher } from '../Fetcher';
import { ItemList } from '../components/ItemList';
import { ItemSorter } from '../components/ItemSorter';
import { styles } from '../styles/Styles';

export class ItemListContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = { items: [], hasError: false };
		this.titleKey = "name";
		this.sortByTitle = this.sortByTitle.bind(this);
	}
	
	async fetchItems(path) {
		Fetcher.fetch(path)
    	.then(items => {   		
    		this.setState({ items: items});
 				this.currentSort = Constants.sort.titleDown;
   			this.sortByTitle();
    	})
			.catch(reason => {
				console.log(reason.message);
				this.setState({ hasError: true });
			});
	}
	
	sortByTitle() {
		let up = this.currentSort !== Constants.sort.titleUp;
		let items = this.state.items.sort((a, b) => this.stringSort(a, b, this.titleKey, up));

		this.setState({ items: items });
		this.currentSort = up ? Constants.sort.titleUp : Constants.sort.titleDown;
	}
	
	stringSort(a, b, key, up) {
		let titleA = a[key].replace(Constants.theRegex, "");
		let titleB = b[key].replace(Constants.theRegex, "");
			
		return up ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
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
		if (this.state.hasError) return <ErrorDisplay />;

		return (
			<div>
				<div style={styles.sorter}>
					<ItemSorter sort={this.sortByTitle} text={this.titleKey} style={styles.light} />
				</div>
				<ItemList path={this.props.match.path} items={this.state.items} />
			</div>
		);
	}
}


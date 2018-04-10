import React from 'react';
import { Constants } from '../Constants';
import { ItemListContainer } from './ItemListContainer';
import { FilmList } from '../components/FilmList';
import { FilmSorter } from '../components/FilmSorter';

const sort = { titleUp: 0, titleDown: 1, dateUp: 2, dateDown: 3 };

export class FilmListContainer extends ItemListContainer {
	constructor(props) {
		super(props);
		
		this.currentSort = sort.titleUp;
		this.sortTitle = this.sortTitle.bind(this);
		this.sortDate = this.sortDate.bind(this);
	}
	
	sortTitle() {
		let up = this.currentSort !== sort.titleUp;
		this.sortResults(this.state.items, up);
		this.currentSort = up ? sort.titleUp : sort.titleDown;
	}
	
	sortDate() {
		let up = this.currentSort !== sort.dateUp;
		let key = "release_date";
		let items = this.state.items.sort((a, b) => {
			let yearA = parseInt(a[key], 10);
			let yearB = parseInt(b[key], 10);
			let result = up ? yearA - yearB : yearB - yearA;
			
			if (result === 0) {
				let key = "title";
				let titleA = a[key].replace(Constants.theRegex, "");
				let titleB = b[key].replace(Constants.theRegex, "");
				result = up ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
			}
			
			return result;
		});
			
		this.setState({ items: items });
		this.currentSort = up ? sort.dateUp : sort.dateDown;
	}

	render(props) {
		return (
			<div>
				<FilmSorter sortTitle={this.sortTitle} sortDate={this.sortDate} />
				<FilmList path={this.props.match.path} items={this.state.items} />
			</div>
		);
	}
}


import React from 'react';
import { Constants } from '../Constants';
import { Fetcher } from '../Fetcher';
import { FilmList } from '../components/FilmList';
import { FilmSorter } from '../components/FilmSorter';
import { ItemListContainer } from './ItemListContainer';

const sort = { 
	titleUp: 0,
	titleDown: 1,
	dateUp: 2,
	dateDown: 3,
	scoreUp: 4,
	scoreDown: 5
};

export class FilmListContainer extends ItemListContainer {
	constructor(props) {
		super(props);
		
		this.currentSort = sort.titleDown;
		this.sortByTitle = this.sortByTitle.bind(this);
		this.sortByScore = this.sortByScore.bind(this);
		this.sortByDate = this.sortByDate.bind(this);
	}
	
	async fetchItems(path) {
		Fetcher.fetch(path)
    	.then(items => {   		
    		this.setState({ items: items});
    		this.sortByTitle();
    	})
			.catch(reason => console.log(reason.message));
	}
	
	sortByTitle() {
		let up = this.currentSort !== sort.titleUp;
		let items = this.state.items.sort((a, b) => this.titleSort(a, b, up));

		this.setState({ items: items });
		this.currentSort = up ? sort.titleUp : sort.titleDown;
	}
	
	titleSort(a, b, up) {
		let key = "title";
		let titleA = a[key].replace(Constants.theRegex, "");
		let titleB = b[key].replace(Constants.theRegex, "");
			
		return up ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
	}
	
	sortByScore() {
		this.sortByNumber("rt_score", sort.scoreUp, sort.scoreDown);
	}
	
	sortByDate() {
		this.sortByNumber("release_date", sort.dateUp, sort.dateDown);
	}
	
	sortByNumber(key, sortUp, sortDown) {
		let down = this.currentSort !== sortDown;
		let items = this.state.items.sort((a, b) => {
			let result = this.numberSort(a, b, key, down);
			
			if (result === 0) {
				result = this.titleSort(a, b, !down);
			}
			
			return result;
		});
			
		this.setState({ items: items });
		this.currentSort = down ? sortDown : sortUp;
	}

	numberSort(a, b, key, down) {
			let yearA = parseInt(a[key], 10);
			let yearB = parseInt(b[key], 10);
			
			return down ? yearB - yearA : yearA - yearB;
	}
		
	render(props) {
		return (
			<div>
				<FilmSorter sortTitle={this.sortByTitle} sortScore={this.sortByScore} sortDate={this.sortByDate} />
				<FilmList path={this.props.match.path} items={this.state.items} />
			</div>
		);
	}
}


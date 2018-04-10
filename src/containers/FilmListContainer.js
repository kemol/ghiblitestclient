import React from 'react';
import { Constants } from '../Constants';
import { ItemListContainer } from './ItemListContainer';
import { FilmList } from '../components/FilmList';
import { FilmSorter } from '../components/FilmSorter';

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
		
		this.currentSort = sort.titleUp;
		this.sortTitle = this.sortTitle.bind(this);
		this.sortScore = this.sortScore.bind(this);
		this.sortDate = this.sortDate.bind(this);
	}
	
	sortTitle() {
		let up = this.currentSort !== sort.titleUp;
		this.sortResults(this.state.items, up);
		this.currentSort = up ? sort.titleUp : sort.titleDown;
	}
	
	sortScore() {
		this.sortByNumber("rt_score", sort.scoreUp, sort.scoreDown);
	}
	
	sortDate() {
		this.sortByNumber("release_date", sort.dateUp, sort.dateDown);
	}
	
	sortByNumber(key, sortUp, sortDown) {
		let down = this.currentSort !== sortDown;
		let items = this.state.items.sort((a, b) => {
			let yearA = parseInt(a[key], 10);
			let yearB = parseInt(b[key], 10);
			let result = down ? yearB - yearA : yearA - yearB;
			
			if (result === 0) {
				let key = "title";
				let titleA = a[key].replace(Constants.theRegex, "");
				let titleB = b[key].replace(Constants.theRegex, "");
				result = down ? titleB.localeCompare(titleA) : titleA.localeCompare(titleB);
			}
			
			return result;
		});
			
		this.setState({ items: items });
		this.currentSort = down ? sortDown : sortUp;
	}

	render(props) {
		return (
			<div>
				<FilmSorter sortTitle={this.sortTitle} sortScore={this.sortScore} sortDate={this.sortDate} />
				<FilmList path={this.props.match.path} items={this.state.items} />
			</div>
		);
	}
}


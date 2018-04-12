import React from 'react';
import { Constants } from '../Constants';
import { FilmList } from '../components/FilmList';
import { ItemListContainer } from './ItemListContainer';
import { ItemSorter } from '../components/ItemSorter';
import { styles } from '../styles/Styles';

export class FilmListContainer extends ItemListContainer {
	constructor(props) {
		super(props);
		
		this.titleKey = "title";
		this.sortByScore = this.sortByScore.bind(this);
		this.sortByDate = this.sortByDate.bind(this);
	}
	
	sortByScore() {
		this.sortByNumber("rt_score", Constants.sort.scoreUp, Constants.sort.scoreDown);
	}
	
	sortByDate() {
		this.sortByNumber("release_date", Constants.sort.dateUp, Constants.sort.dateDown);
	}
	
	sortByNumber(key, sortUp, sortDown) {
		let down = this.currentSort !== sortDown;
		let items = this.state.items.sort((a, b) => {
			let result = this.numberSort(a, b, key, down);
			
			if (result === 0) {
				result = this.stringSort(a, b, this.titleKey, !down);
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
				<div style={styles.sorter}>
					<ItemSorter sort={this.sortByTitle} text={this.titleKey} style={styles.light} />
					<ItemSorter sort={this.sortByScore} text="rt score" style={styles.medium} />
					<ItemSorter sort={this.sortByDate} text="release date" style={styles.dark} />
				</div>
				<FilmList path={this.props.match.path} items={this.state.items} />
			</div>
		);
	}
}


import React from 'react';
import { Constants } from '../Constants';
import { ItemDetail } from '../components/ItemDetail';

export class ItemDetailContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { item: [] };
	}
	
	fetchDetail(path) {
		const endpoint = `${Constants.apiBase}${path}`;
  	fetch(endpoint)
      .then(response => response.json())
      .then(result => this.getItemDetails(result));
	}

	// get lists of other item types
	// match ids to get names
	getItemDetails(item) {
		this.cleanItem(item);
		
		let films = Constants.items.films;
		if (films in item) {
			this.getAllItems(films)
				.then(items => this.setItems(item, films, items));			
		}
		
		let species = Constants.items.species;
		if (species in item) {
			this.getAllItems(species)
				.then(items => this.setItems(item, species, items));			
		}
		
		let people = Constants.items.people;
		let aliases = Constants.peopleAliases;
		
		aliases.forEach(a => {
			if (a in item) {
				this.getAllItems(people).then(items => this.setItems(item, people, items, a));
			}
		});
	}
	
	// cleaning some data
	cleanItem(item) {
		this.updateUrl(item);
		
		for (let key in item) {
			if (item[key] === "" || item[key] === Constants.todo) {
				item[key] = Constants.unknown;
			}
		}
	}
	
	// some of the items have bad urls so we fix them here
	updateUrl(item) {
		// fix for goofy data in locations
		if (Array.isArray(item.url)) {
			item.url = item.url[0];
		}
			
		if (item.url.indexOf(item.id) === -1) {
			let index = item.url.lastIndexOf("/");
			item.url = item.url.substring(0, index + 1) + item.id;
		}
	}
	
	getAllItems(type) {
		const endpoint = `${Constants.apiBase}/${type}`;
  	return fetch(endpoint)
      .then(response => response.json())
      .then(result =>
      { 
      	for (let i = 0; i < result.length; i++) {
      		this.updateUrl(result[i]);
      	}
      	
      	return result;
      }
    );
	}

	setItems(item, key, allSubItems, alias) {
		let realKey = alias || key;
		let subItems = [].concat(item[realKey]);
			
		if (subItems.length > 0 && subItems[0] !== Constants.todo) {
			item[realKey] = subItems.map(f => this.setItemInfo(f, key, allSubItems));
		} else {
			item[realKey] = Constants.unknown;
		}

		this.setState({item: item});
	}
	
	setItemInfo(item, key, allItems) {
		let fullItem = allItems.find(i => i.url === item);
		return { id: fullItem.id, type: key, name: "name" in fullItem ? fullItem.name : fullItem.title };
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


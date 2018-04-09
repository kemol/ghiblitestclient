import React from 'react';
import { ItemDetail } from '../components/ItemDetail';

const apiBase = "https://ghibliapi.herokuapp.com";

export class ItemDetailContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { item: [] };
		
		this.getItemDetails = this.getItemDetails.bind(this);
	}
	
	getItemDetails(item) {
		// get lists of other item types
		// match ids to get names
		this.updateUrl(item);
		
		if ("films" in item) {
			this.getAllFilms()
				.then(films => this.setItems(item, "films", films));			
		}
		
		if ("species" in item) {
			this.getAllSpecies()
				.then(species => this.setItems(item, "species", species));
		}
		
		if ("people" in item) {
			this.getAllPeople()
				.then(people => this.setItems(item, "people", people));
		} else if ("residents" in item) {
			this.getAllPeople()
				.then(people => this.setItems(item, "people", people, "residents"));
		} else if ("pilot" in item) {
			this.getAllPeople()
				.then(people => this.setItems(item, "people", people, "pilot"));
		}
	}
	
	setItems(item, key, allSubItems, alias) {
		let realKey = alias || key;
		let subItems = [].concat(item[realKey]);
			
		if (subItems.length > 0 && subItems[0] !== "TODO") {
			item[realKey] = subItems.map(f => this.setItemInfo(f, key, allSubItems));
		} else {
			item[realKey] = "Unknown";
		}

		this.setState({item: item});
	}
	
	setItemInfo(item, key, allItems) {
		let fullItem = allItems.find(i => i.url === item);
		return { id: fullItem.id, type: key, name: 'name' in fullItem ? fullItem.name : fullItem.title };
	}
	
	getAllFilms() {
		return this.getAllItems("films");
	}
	
	getAllPeople() {
		return this.getAllItems("people");
	}
	
	getAllSpecies() {
		return this.getAllItems("species");
	}
	
	getAllItems(type) {
		const endpoint = `${apiBase}/${type}`;
  	return fetch(endpoint)
      .then(response => response.json())
      .then(result =>
      { 
      	for (let i = 0; i < result.length; i++) {
      		this.updateUrl(result[i]);
      	}
      	
      	return result;
      });
	}

	fetchDetail(path) {
		const endpoint = `${apiBase}${path}`;
  	fetch(endpoint)
      .then(response => response.json())
      .then(result => this.getItemDetails(result));
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
	
	componentDidMount() {
		this.fetchDetail(this.props.match.url);
	}
	
	componentWillReceiveProps(nextProps) {
		if (nextProps.match.url !== this.props.match.url) {
			this.fetchDetail(nextProps.match.url);
		}
	}
	
	render() {
		return (
			<div>
  	    <ItemDetail item={this.state.item} />
			</div>
		);
	}
}


import React from 'react';
import { ItemDetail } from '../components/ItemDetail';
import { ItemDetailContainer } from './ItemDetailContainer';

const apiBase = "https://ghibliapi.herokuapp.com";
const detailItems = ["people", "species", "locations", "vehicles"];

export class FilmDetailContainer extends ItemDetailContainer {
	getItemDetails(film) {
		// get lists of other item types
		// match ids to get names
		this.updateUrl(film);
		
		detailItems.forEach(d => this.getAllItems(d).then(items => this.setItems(film, d, items)));
	}
	
	// the data on the film objects is incomplete so we're actually getting 
	// all the other objects to match against their films property 
	setItems(film, key, allSubItems) {
		let subItems = [];
		
		for (let i = 0; i < allSubItems.length; i++) {
			let subItem = allSubItems[i];
			let subFilms = [].concat(subItem.films);
			let matchFilm = subFilms.find(f => f === film.url);
			if (matchFilm) {
				subItem.type = key;
				subItems.push(subItem);
			}
		}
		
		film[key] = subItems.length > 0 ? subItems : "Unknown";

		this.setState({ item: film });
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
}


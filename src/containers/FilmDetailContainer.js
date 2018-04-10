import { Constants } from '../Constants';
import { ItemDetailContainer } from './ItemDetailContainer';

export class FilmDetailContainer extends ItemDetailContainer {
	getItemDetails(film) {
		this.cleanItem(film);
		
		let detailItems = Object.keys(Constants.items);
		detailItems.forEach(d => {
			let type = Constants.items[d];
			if (type in film) {
				this.getAllItems(type).then(items => this.setItems(film, type, items));
			}
		});
	}
	
	// the data on the film objects is incomplete so we're actually getting 
	// all the other objects to match the current film against their films property 
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
      });
	}
	
	setItems(film, key, allSubItems) {
		let subItems = [];	// this will hold the matching items
		
		for (let i = 0; i < allSubItems.length; i++) {
			let subItem = allSubItems[i];
			let subFilms = [].concat(subItem.films);	// all the films listed on the item
			let matchFilm = subFilms.find(f => f === film.url);

			// item has a film matching the current detail film
			if (matchFilm) {
				subItem.type = key;
				subItems.push(subItem);
			}
		}
		
		// update the film with the matches
		film[key] = subItems.length > 0 ? subItems : Constants.unknown;

		this.setState({ item: film });
	}
}


import { Constants } from './Constants';

export class Fetcher {
	constructor() {
		this.setItemDetails = this.setItemDetails.bind(this);
	}
	
	static cache = {};

	static async fetch(path) {
		path = path.startsWith("/") ? path : `/${path}`;
		
		if (path in this.cache) {			
			return this.cache[path];
		} else {			
			const endpoint = `${Constants.apiBase}${path}`;

	  	let result = await fetch(endpoint)
	  		.then(response => response.json());
	  	
    	if (Array.isArray(result)) {
      	for (let i = 0; i < result.length; i++) {
      		this.cleanItem(result[i]);
      	}
      	
      	this.sortResults(result);
			} else {
		 		if (path.includes(Constants.items.films)) {
		 			await this.getFilmDetails(result);
	  		} else {
	   			await this.getItemDetails(result);
	   		}
   		}
      
      this.cache[path] = result;
      return result;
    }
	}
		
	// clean up some fields
	static cleanItem(item) {
		this.updateUrl(item);
		
		for (let key in item) {
			if (item[key] === "" || item[key] === Constants.todo) {
				item[key] = Constants.unknown;
			}
		}
	}
	
	// some of the items have bad urls so we fix them here
	static updateUrl(item) {
		if ("url" in item) {
			// fix for goofy data in locations
			if (Array.isArray(item.url)) {
				item.url = item.url[0];
			}
			
			if (item.url.indexOf(item.id) === -1) {
				let index = item.url.lastIndexOf("/");
				item.url = item.url.substring(0, index + 1) + item.id;
			}
		}
	}

	static sortResults(results) {
		if (results.length > 0) {
			let key = "name" in results[0] ? "name" : "title";
			results.sort((a, b) => {
				let titleA = a[key].replace(Constants.theRegex, "");
				let titleB = b[key].replace(Constants.theRegex, "");
				
				return titleA.localeCompare(titleB);
			});
		}
	}
	
	// get lists of other item types
	// match ids to get names
	static async getItemDetails(item) {
		this.cleanItem(item);

		let promises = [];
		let filmsKey = Constants.items.films;
		if (filmsKey in item) {
			promises.push(this.getAllItems(filmsKey, item));
		}
		
		let speciesKey = Constants.items.species;
		if (speciesKey in item) {
			promises.push(this.getAllItems(speciesKey, item));
		}
		
		let peopleKey = Constants.items.people;
		let aliases = Constants.peopleAliases;
		
		aliases.forEach((alias) => {
			if (alias in item) {
				promises.push(this.getAllItems(peopleKey, item, alias));
			}
		});
		
		return await Promise.all(promises);
	}
		
	static async getAllItems(type, item, alias) {
		let allItems = await this.fetch(type);//, this.setItemDetails, item, type, alias);
		this.setItemDetails(allItems, item, type, alias);
	}

	static setItemDetails(allTypeItems, item, type, alias) {
		let realKey = alias || type;
		let childItems = [].concat(item[realKey]);
			
		if (childItems.length > 0 && childItems[0] !== Constants.todo) {
			item[realKey] = childItems.map(childItem => this.setItemInfo(childItem, type, allTypeItems));
		} else {
			item[realKey] = Constants.unknown;
		}
	}
	
	static setItemInfo(item, type, typeItems) {
		let fullItem = typeItems.find(i => i.url === item);
		return { id: fullItem.id, type: type, name: "name" in fullItem ? fullItem.name : fullItem.title };
	}
	
	// the data on the film objects is incomplete so we're actually getting 
	// all the other objects to match the current film against their films property 
	static async getFilmDetails(film) {
		this.cleanItem(film);

		let promises = [];
		let detailItems = Object.keys(Constants.items);
		detailItems.forEach((d) => {
			let type = Constants.items[d];
			if (type in film) {
				promises.push(this.getAllFilmItems(type, film));
			}
		});
		
		return await Promise.all(promises);
	}
	
	static async getAllFilmItems(type, film) {
		let typeItems = await this.fetch(type);
		this.setFilmItems(film, type, typeItems);
	}

	static setFilmItems(film, key, allTypeItems) {
		let childItems = [];	// this will hold the matching items
		
		for (let i = 0; i < allTypeItems.length; i++) {
			let childItem = allTypeItems[i];
			let childFilms = [].concat(childItem.films);	// all the films listed on the item
			let matchFilm = childFilms.find(f => f === film.url);

			// item has a film matching the current detail film
			if (matchFilm) {
				childItem.type = key;
				childItems.push(childItem);
			}
		}
		
		// update the film with the matches
		film[key] = childItems.length > 0 ? childItems : Constants.unknown;
	}
}

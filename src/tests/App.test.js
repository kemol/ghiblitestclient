import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import App from '../containers/App';
import { Constants } from '../Constants';
import { ItemSorter } from '../components/ItemSorter';
import { ItemList } from '../components/ItemList';
import { SubItemList } from '../components/SubItemList';
import { ItemDetail } from '../components/ItemDetail';
import { FilmList } from '../components/FilmList';
import { Fetcher } from '../Fetcher';

describe('<App />', () => {
	it('renders without crashing', () => {
	  shallow(<App />);
	});
	
  it('renders a <BrowserRouter /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(BrowserRouter).length).toBe(1);
  });
});

describe('<ItemSorter />', () => {
	it('renders a <button />', () => {
		const sort = jest.fn();
		const text = "text";
		const wrapper = shallow(<ItemSorter sort={sort} text={text} />);
		
		expect(wrapper.find('button').length).toBe(1);
		expect(wrapper.find('button').at(0).text()).toBe(text);
	});

	it('raises an onClick event', () => {
		const sort = jest.fn();
		const text = "text";
		const wrapper = shallow(<ItemSorter sort={sort} text={text} />);
		wrapper.find('button').simulate('click');
		
		expect(sort).toHaveBeenCalled();
	});
});

describe('<ItemList />', () => {
	it('renders a <ul />', () => {
		const items = vehicles;
		const path = "path";
		const wrapper = shallow(<ItemList path={path} items={items} />);
		
		expect(wrapper.find('ul').length).toBe(1);
	});

	it('renders a <li /> with <Link /> for each item', () => {
		const items = vehicles;
		const path = "path";
		const wrapper = shallow(<ItemList path={path} items={items} />);
		
		expect(wrapper.find('li').length).toBe(items.length);
		expect(wrapper.find(Link).length).toBe(items.length);
		expect(wrapper.find(Link).at(0).props().to).toBe(`${path}/${items[0].id}`);
	});
});

describe('<ItemDetail />', () => {
	it('renders a <ul />', () => {
		const item = vehicles[0];
		const wrapper = shallow(<ItemDetail item={item} />);
		
		expect(wrapper.find('ul').length).toBe(1);
	});

	it('renders a <li /> for each property', () => {
		const item = vehicles[0];
		const wrapper = shallow(<ItemDetail item={item} />);
		
		expect(wrapper.find('li').length).toBe(8);
	});

	it('renders a <SubItemList /> for each sub-item type', () => {
		const item = films[1];
		const wrapper = shallow(<ItemDetail item={item} />);
		
		expect(wrapper.find(SubItemList).length).toBe(4);
	});
});

describe('<FilmList />', () => {
	it('renders a <ul />', () => {
		const items = films;
		const path = "path";
		const wrapper = shallow(<FilmList path={path} items={items} />);
		
		expect(wrapper.find('ul').length).toBe(1);
	});

	it('renders a <li /> with <Link /> for each item', () => {
		const items = films;
		const path = "path";
		const wrapper = shallow(<FilmList path={path} items={items} />);
		
		expect(wrapper.find('li').length).toBe(items.length);
		expect(wrapper.find(Link).length).toBe(items.length);
		expect(wrapper.find(Link).at(0).props().to).toBe(`${path}/${items[0].id}`);
	});

	it('renders three <span /> for each item', () => {
		const items = films;
		const path = "path";
		const wrapper = shallow(<FilmList path={path} items={items} />);
		
		expect(wrapper.find('span').length).toBe(items.length * 3);
	});
});

describe('Fetcher', () => {
	it('cleans item data', () => {
		let	 item = locations[2];
		expect(item.url.indexOf(item.id)).toBe(-1);
		expect(item.climate).toBe(Constants.todo);
		
		Fetcher.cleanItem(item);
		expect(item.url.indexOf(item.id)).not.toBe(-1);
		expect(item.climate).toBe(Constants.unknown);		
	});
	
	it('sets item details', () => {
		let item = vehicles[0];
		let key = "films";		
		expect(item[key]).toBe("https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe");
		
		Fetcher.setItemDetails(films, item, key);
		const expected = {
			id: films[0].id,
			type: "films",
			name: films[0].title
		};
		expect(item[key].length).toBe(1);
		expect(item[key][0]).toEqual(expected);		
	});
	
	it('cleans item details', () => {
		let item = locations[0];
		let key = "people";
		let alias = "residents"	;
		expect(item[alias]).toEqual(expect.arrayContaining([]));
		
		Fetcher.setItemDetails(people, item, key, alias);
		expect(item[alias]).toEqual(Constants.unknown);		
	});
	
	it('sets film details', () => {
		let item = films[0];
		let key = "people";
		expect(item[key].length).toBe(1);
		expect(item[key][0]).toBe("https://ghibliapi.herokuapp.com/people/");
		
		Fetcher.setFilmItems(item, key, people);
		const expected = {
			id: people[0].id,
			type: "people",
			name: people[0].name
		};
		expect(item[key].length).toBe(1);
		expect(item[key][0]).toEqual(expect.objectContaining(expected));		
	});
	

});

const people = 
[
	{
    "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
    "name": "Colonel Muska",
    "gender": "Male",
    "age": "33",
    "eye_color": "Grey",
    "hair_color": "Brown",
    "films": [
      "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
    ],
    "species": "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
    "url": "https://ghibliapi.herokuapp.com/people/40c005ce-3725-4f15-8409-3e1b1b14b583"
  },
  {
    "id": "6523068d-f5a9-4150-bf5b-76abe6fb42c3",
    "name": "Porco Rosso",
    "gender": "Male",
    "age": "47",
    "eye_color": "Black",
    "hair_color": "Brown",
    "films": [
      "https://ghibliapi.herokuapp.com/films/ebbb6b7c-945c-41ee-a792-de0e43191bd8"
    ],
    "species": "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
    "url": "https://ghibliapi.herokuapp.com/people/6523068d-f5a9-4150-bf5b-76abe6fb42c3"
  }
];

const vehicles =
[
  {
    "id": "4e09b023-f650-4747-9ab9-eacf14540cfb",
    "name": "Air Destroyer Goliath",
    "description": "A military airship utilized by the government to access Laputa",
    "vehicle_class": "Airship",
    "length": "1,000",
    "pilot": "https://ghibliapi.herokuapp.com/people/40c005ce-3725-4f15-8409-3e1b1b14b583",
    "films": "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "url": "https://ghibliapi.herokuapp.com/vehicles/4e09b023-f650-4747-9ab9-eacf14540cfb"
  },
  {
    "id": "d8f893b5-1dd9-41a1-9918-0099c1aa2de8",
    "name": "Red Wing",
    "description": "An experimental aircraft captured by Porco. Named Savoia S.21",
    "vehicle_class": "Airplane",
    "length": "20",
    "pilot": "https://ghibliapi.herokuapp.com/people/6523068d-f5a9-4150-bf5b-76abe6fb42c3",
    "films": "https://ghibliapi.herokuapp.com/films/ebbb6b7c-945c-41ee-a792-de0e43191bd8",
    "url": "https://ghibliapi.herokuapp.com/vehicles/d8f893b5-1dd9-41a1-9918-0099c1aa2de8"
  },
  {
    "id": "923d70c9-8f15-4972-ad53-0128b261d628",
    "name": "Sosuke's Boat",
    "description": "A toy boat where Sosuke plays",
    "vehicle_class": "Boat",
    "length": "10",
    "pilot": "https://ghibliapi.herokuapp.com/people/a10f64f3-e0b6-4a94-bf30-87ad8bc51607",
    "films": "https://ghibliapi.herokuapp.com/films/758bf02e-3122-46e0-884e-67cf83df1786",
    "url": "https://ghibliapi.herokuapp.com/vehicles/923d70c9-8f15-4972-ad53-0128b261d628"
  }
];

const locations =
[
 {
    "id": "56e423c4-d9a1-44c4-8bdb-1cab45fbf63e",
    "name": "The Marsh House",
    "climate": "Mild",
    "terrain": "Marsh",
    "surface_water": "60",
    "residents": [],
    "films": [
      "https://ghibliapi.herokuapp.com/films/5fdfb320-2a02-49a7-94ff-5ca418cae602"
    ],
    "url": [
      "https://ghibliapi.herokuapp.com/locations/660c8c91-bd92-43db-b475-b2df6ca96fec"
    ]
  },
  {
    "id": "660c8c91-bd92-43db-b475-b2df6ca96fec",
    "name": "Hospital",
    "climate": "Continental",
    "terrain": "Hill",
    "surface_water": "40",
    "residents": [
      "TODO"
    ],
    "films": [
      "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"
    ],
    "url": [
      "https://ghibliapi.herokuapp.com/locations/660c8c91-bd92-43db-b475-b2df6ca96fec"
    ]
  },
  {
    "id": "6ba60a86-7c74-4ec4-a6f4-7112b5705a2f",
    "name": "Gondoa",
    "climate": "TODO",
    "terrain": "TODO",
    "surface_water": "40",
    "residents": [
      "TODO"
    ],
    "films": [
      "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
    ],
    "url": [
      "https://ghibliapi.herokuapp.com/locations/660c8c91-bd92-43db-b475-b2df6ca96fec"
    ]
  }
];

const films = 
[
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "release_date": "1986",
    "rt_score": "95",
    "people": [
      "https://ghibliapi.herokuapp.com/people/"
    ],
    "species": [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
    ],
    "locations": [
      "https://ghibliapi.herokuapp.com/locations/"
    ],
    "vehicles": [
      "https://ghibliapi.herokuapp.com/vehicles/"
    ],
    "url": "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
  },
  {
    "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
    "title": "Grave of the Fireflies",
    "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
    "director": "Isao Takahata",
    "producer": "Toru Hara",
    "release_date": "1988",
    "rt_score": "97",
    "people": [
      people[0]
    ],
    "species": [
      people[0]
    ],
    "locations": [
      locations[0]
    ],
    "vehicles": [
      vehicles[0]
    ],
    "url": "https://ghibliapi.herokuapp.com/films/12cfb892-aac0-4c5b-94af-521852e46d6a"
  }
];

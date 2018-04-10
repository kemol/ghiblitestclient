import React from 'react';
import { ItemListContainer } from './ItemListContainer';
import { FilmList } from '../components/FilmList';

export class FilmListContainer extends ItemListContainer {
	render() {
		return <FilmList path={this.props.match.path} items={this.state.items} />;
	}
}


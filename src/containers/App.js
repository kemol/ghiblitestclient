import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainContainer } from './MainContainer';
import '../styles/App.css';

export default class App extends React.Component {
	render() {
  	return (
  		<BrowserRouter>
  			<MainContainer />
  		</BrowserRouter>
  	);
  }
}

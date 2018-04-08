import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '../styles/App.css';
import { MainContainer } from './MainContainer';

export default class App extends React.Component {
	render() {
  	return (
  		<BrowserRouter>
  			<MainContainer />
  		</BrowserRouter>
  	);
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import '../styles/App.css';

const MainLayout = props => (
  <div className="main-layout">
    <header>
      Ghibli FTW
    </header>
    <main>
        <Switch>
        	<Route path="/" exact component={HomeLayout} />
          <Route path="/movies" component={MoviesLayout} />
          <Route path="/people" component={PeopleLayout} />
          <Route path="/locations" component={LocationsLayout} />
          <Route path="/vehicles" component={VehiclesLayout} />
          <Redirect to="/" />
        </Switch>
    </main>
  </div>
)

const HomeLayout =() => <div>HomeLayout Page</div>
const MoviesLayout = () => <div>MoviesLayout Page</div>
const PeopleLayout =() => <div>PeopleLayout Page</div>
const LocationsLayout = () => <div>LocationsLayout Page</div>
const VehiclesLayout = () => <div>VehiclesLayout Page</div>

export default class App extends React.Component {
	render() {
  	return (
  		<BrowserRouter>
  	  	<MainLayout />
  		</BrowserRouter>
  	);
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
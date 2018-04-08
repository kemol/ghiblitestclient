import React from 'react';

const ItemList = (props) => (
	<ul>
		{props.items.map(item => <li>{item.name}{item.title}</li>)}
	</ul>
);

export class ListContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { items: [] };
	}
	
	componentDidMount() {
		const endpoint = `https://ghibliapi.herokuapp.com/${this.props.item}`;
  	fetch(endpoint)
      .then(response => response.json())
      .then(
       results => this.setState({ items: results }));
	}
	render() {
		return (
			<div>
  	    <ItemList items={this.state.items} />
			</div>
		);
	}
}


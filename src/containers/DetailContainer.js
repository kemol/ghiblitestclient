import React from 'react'

const ItemDetail = (props) => (
	<ul>
		{Object.keys(props.item).map((k, i) => <li>{k}: {props.item[k]}</li>)}
	</ul>
);

export class DetailContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { item: [] };
	}
	
	componentDidMount() {
		const endpoint = `https://ghibliapi.herokuapp.com${this.props.match.url}`;
  	fetch(endpoint)
      .then(response => response.json())
      .then(
       result => this.setState({ item: result }));
	}
	
	render() {
		return (
			<div>
  	    <ItemDetail item={this.state.item} />
			</div>
		);
	}
}


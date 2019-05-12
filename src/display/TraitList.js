import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'

class TraitList extends Component {
	colours = {
		"attack": "danger",
		"ability": "primary",
		"spellcasting": "info",
		"legendary": "warning",
		"sense": "secondary",
		"immunity": "success",
		"resistance": "success",
		"vulnerability": "success",
		"language": "dark",
	}
	
	render() {
		return (
			<ListGroup className="list-group">
				{this.props.list.map((trait) => {
					let capitalisedType = trait.type.charAt(0).toUpperCase() + trait.type.slice(1);
					return (
						<ListGroup.Item variant={this.colours[trait.type]} style={(this.equals(trait.type, "skill")) ? {backgroundColor: "#d791ff"} : {}}
										action key={trait.name} onClick={() => this.props.select(trait)}>
							<b>{capitalisedType}</b>
							{" | " + trait.displayName}
						</ListGroup.Item>
					)
				})
				}
			</ListGroup>
		);
	}

	equals(str1, str2) {
		return str1.localeCompare(str2) === 0;
	}
}

export default TraitList;
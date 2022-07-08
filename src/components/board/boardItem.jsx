import React, { Component } from "react";
import "./board.css";

export default class BoardItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	checkItem() {
		const checkComponent = document.querySelector("#board-item" + this.props.id);
		if (checkComponent.style.cssText) {
			checkComponent.style.cssText = 0;
		} else {
			checkComponent.style.cssText = "text-decoration: line-through";
		}
	}

	delete(id) {
		const selected = document.querySelector("#board-item" + id);
		if (selected) {
			selected.remove();
		}
	}
	render() {
		return (
			<li id={"board-item" + this.props.id}>
				<span className="BoardTitle">{"📋 " + this.props.text}</span>
				<input
					type="button"
					value="X"
					onClick={() => {
						this.delete(this.props.id);
					}}
				/>
			</li>
		);
	}
}

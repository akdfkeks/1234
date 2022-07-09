import { Component } from "react";
import "./board.css";

export default class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			board: [],
		};

		this.state.board = this.props.items.map((item) => {});
	}
	render() {
		return <ul> {this.state.board} </ul>;
	}
}

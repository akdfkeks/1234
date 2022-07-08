import Board from "./board";
import BoardItem from "./boardItem";
import React, { Component } from "react";
import axios from "axios";

export default class BoardList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemNum: 0,
			tempArr: [],
		};
		this.homeAddr = "172.16.17.124:3001";
	}
	deleteItem(num) {
		const selected = document.querySelector("#board-item" + num);
		if (selected) {
			selected.remove();
		}
	}

	addItem() {
		const inputText = document.querySelector("#inputText");
		// const tempArr=[]
		if (inputText.value) {
			this.state.tempArr.push(
				<BoardItem
					//id={this.state.itemNum++}
					id={this.setState({ itemNum: this.state.itemNum + 1 })}
					text={inputText.value}
					delete={(num) => {
						this.deleteItem(num);
					}}
				/>
			);
			this.setState({
				tempArr: this.state.tempArr.concat(inputText),
			});
			axios({
				method: "post",
				url: `http://${this.homeAddr}/user/board`,
				data: {
					boardTitle: "fortest",
				},
			}).then((Response) => {});
			// inputText.value = "";
		}
	}

	render() {
		return (
			<div className="BoardName">
				<input autoComplete="off" id="inputText" type="text" placeholder="게시판 이름"></input>
				<input
					className="AddButton"
					type="button"
					value="↩"
					name="boardTitle"
					onClick={() => {
						this.addItem();
					}}
				/>
				<Board />
			</div>
		);
	}
}

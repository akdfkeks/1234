import BoardItem from "./boardItem";
import React, { Component } from "react";
import axios from "axios";
import Board from "./board";

export default class BoardList extends Component {
	constructor(props) {
		super(props);
		this.homeAddr = "172.16.17.124:3001";
		this.dataList = [];
		this.itemIndex = 0;
		this.state = {
			boardList: [],
		};
		this.getBoardList();
	}

	getBoardList() {
		axios({
			method: "get",
			url: `http://${this.homeAddr}/user/board`,
		}).then((res) => {
			this.dataList = res.data.data;
			this.createBoardItem();
		});
	}
	createBoardItem() {
		let tempArr = [];
		this.dataList.forEach((board) => {
			tempArr.push(<BoardItem id={this.itemIndex++} text={board.title} />);
		});
		this.state.boardList = tempArr;
		console.log(this.state.boardList);
	}
	addBoard() {
		const inputText = document.querySelector("#inputText");
		if (inputText.value) {
			axios({
				method: "post",
				url: `http://${this.homeAddr}/user/board`,
				data: {
					boardTitle: inputText.value,
				},
			}).then((res) => {
				this.dataList = res.data.data;
				this.createBoardItem();
			});
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
						this.addBoard();
					}}
				/>
				<Board items={this.state.boardList} />
			</div>
		);
	}
}

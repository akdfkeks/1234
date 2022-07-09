import BoardItem from "./boardItem";
import React, { Component } from "react";
import { getBoardList, createBoard } from "../../function/request";

export default class BoardList extends Component {
	constructor(props) {
		super(props);
		//this.homeAddr = "172.16.17.124:3001";
		this.homeAddr = "akdfkeks.iptime.org:3001";
		this.dataList = [];
		this.itemIndex = 0;
		this.state = {
			boardList: [],
		};
		this.getBoard();
	}

	async getBoard() {
		this.dataList = await getBoardList();
		this.createBoardItem();
	}
	createBoardItem() {
		this.setState({
			boardList: this.dataList.map((board) => {
				return <BoardItem key={this.itemIndex} id={this.itemIndex++} text={board.title} />;
			}),
		});
	}
	async addBoard() {
		const inputText = document.querySelector("#inputText");
		if (inputText.value) {
			this.dataList = await createBoard(inputText.value);
			this.createBoardItem();
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
				<ul className="BoardList">{this.state.boardList}</ul>
			</div>
		);
	}
}

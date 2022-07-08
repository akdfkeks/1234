import Board from "./board";
import BoardItem from "./boardItem";
import React, { Component } from "react";
import axios from "axios";

export default class BoardList extends Component {
	constructor(props) {
		super(props);
        
		this.state = {
			itemNum: 0,
			// items: [],
			tempArr:[],

		};
	}

	deleteItem(num) {
		const selected = document.querySelector("#board-item" + num);
		if (selected) {
			selected.remove();
		}
	}

	addItem() {
		const inputText = document.querySelector("#inputText");
        const homeAddr= "172.16.17.124:3001"
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
				url: `http://${homeAddr}/user/board`,
				data: {
					boardTitle: this.state.tempArr[this.state.itemNum].props.text
				},
			}).then(Response => {
				console.log(Response);
                console.log(this.state.tempArr);
			})
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
				<Board items={this.state.tempArr} />
			</div>
		);
	}
}

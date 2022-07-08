import React, { Component } from "react";
import axios from "axios";

export default class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tempArr: [],
			titleArr: [],
		};
		this.homeAddr = "172.16.17.124:3001";
		this.getBoardList();
	}
	setTitle() {
		this.state.tempArr.forEach((obj) => {
			console.log(obj.title);
			this.state.titleArr.push(obj.title);
		});
		//console.log(this.state.titleArr);
	}
	getBoardList() {
		axios({
			method: "get",
			url: `http://${this.homeAddr}/user/board`,
		}).then((Response) => {
			const data = Response.data.data;
			this.state.tempArr = data;
			this.setTitle();
		});
	}
	render() {
		return <ul> {this.state.titleArr} </ul>;
	}
}

import { Component } from "react";
import Follower from "./follower";
import FollowerItem from "./followerItem";

export default class FollowerList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			itemNum: 0,
			items: [],
		};
	}

	deleteItem(num) {
		const selected = document.querySelector("#follower-item" + num);
		if (selected) {
			selected.remove();
		}
	}

	addItem() {
		const inputText = document.querySelector("#inputText");
		if (inputText.value) {
			const tempArr = [...this.state.items];
			tempArr.push(
				<FollowerItem
					id={this.setState({ itemNum: this.state.itemNum + 1 })}
					text={inputText.value}
					delete={(num) => {
						this.deleteItem(num);
					}}
				/>
			);
			this.setState({
				items: tempArr,
			});
			inputText.value = "";
		}
	}

	render() {
		return (
			<div className="FollowerName">
				<input autoComplete="off" id="inputText" type="text" placeholder="팔로워 추가"></input>
				<input
					className="AddButton"
					type="button"
					value="↩"
					onClick={() => {
						this.addItem();
					}}
				/>
				<Follower items={this.state.items} />
			</div>
		);
	}
}

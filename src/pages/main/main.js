import "./main.css";
import React, { Component } from "react";
import BoardList from "../../components/board/boardList";
import Title from "../../components/board/Title";
import FollowerList from "../../components/follower/FollowerList";
import FollowerTitle from "../../components/follower/FollowerTitle";
import MainCalendar from "../../components/calendar/MainCalendar";
import AddToDo from "../../components/todolist/addToDo";
import { useLocation } from "react-router-dom";

class Main extends Component {
	constructor(props) {
		super(props);
		//console.log(this.props.user);
	}
	render() {
		return (
			<div>
				<h1>{this.props.user.userName}</h1>
				<div className="Board">
					<Title text="게시판" />
					<BoardList />
				</div>

				<div className="MainCalendar">
					<MainCalendar />
				</div>

				<div className="Follower">
					<FollowerTitle text="팔로워" />
					<FollowerList />
				</div>

				{/* <div className="AddToDo">
           <AddToDo />
          </div>
       */}
			</div>
		);
	}
}

export default function (props) {
	const { user } = useLocation().state;
	return <Main user={user} />;
}

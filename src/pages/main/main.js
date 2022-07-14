import './main.css';
import React, { Component } from 'react';
import BoardList from '../../components/board/boardList';
import Title from '../../components/board/Title';
import FollowerList from '../../components/follower/FollowerList';
import FollowerTitle from '../../components/follower/FollowerTitle';
import MainCalendar from '../../components/calendar/MainCalendar';
import AddToDo from '../../components/todolist/addToDo';
import { useNavigate} from 'react-router-dom';

class Main extends Component {
  constructor(props){
    super(props)
    // this.navState=useNavigate().state
    console.log(this.navState.user)
  }
    render() {
      return (
        <div>
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
  
  export default Main;
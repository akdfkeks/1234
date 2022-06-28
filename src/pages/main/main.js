import './main.css';
import React, { Component } from 'react';
import BoardList from '../../components/board/BoardList';
import Title from '../../components/board/Title';
import FollowerList from '../../components/follower/FollowerList';
import FollowerTitle from '../../components/follower/FollowerTitle';
import MainCalendar from '../../components/calendar/MainCalendar';
import AddToDo from '../../components/todolist/addToDo';

class Main extends Component {
    render() {
      return (
        <div>
  
          <div className="Board">
            <Title text="게시판 목록" />
            <BoardList />
          </div>
  
          <div className="MainCalendar">
            <MainCalendar />
          </div>
  
          <div className="Follower">
            <FollowerTitle text="팔로워" />
            <FollowerList />
          </div>

          <div className="AddToDo">
           <AddToDo />
          </div>
      
        </div>
      );
    }
  }
  
  export default Main;
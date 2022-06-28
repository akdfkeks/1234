import './App.css';
import React, { Component } from 'react';
import BoardList from './components/board/BoardList';
import Title from './components/board/Title';
import MainCalendar from './components/calendar/MainCalendar';
import AddToDo from './components/todolist/addToDo';
import FollowerList from './components/follower/FollowerList';
import FollowerTitle from './components/follower/FollowerTitle';

class App extends Component {
  render() {
    return (
      <div>
        <Title text="게시판 목록" />
        <BoardList />
        <MainCalendar />
        <AddToDo />
        <FollowerTitle text="팔로워" />
        <FollowerList />
        
      </div>
    );
  }
}

export default App;

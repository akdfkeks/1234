import './App.css';
import React from 'react';
import BoardList from './components/board/boardList';
import Title from './components/board/Title';
import MainCalendar from './components/calendar/MainCalendar';
import AddToDo from './components/todolist/addToDo';

function App() {
  return (
    <div>
      <Title text="게시판 목록" />
      <BoardList />
      <MainCalendar />
      <AddToDo />
    </div>
  );
}

export default App;

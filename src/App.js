import './App.css';
import React, { Component } from 'react';
import Main from './pages/main/main';
import Login from './pages/login/Login';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path='main' element={<Main/>}/>
        </Routes>
      </Router>
    );
  }
}

export default App;

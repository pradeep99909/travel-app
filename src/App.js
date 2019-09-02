import React from 'react';
import './App.css';
import Login from './component/login/login'
import Header from './component/header/header'
import Register from './component/register/register'


import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const customHistory = require('history').createHistory;

class App extends React.Component {
  render(){
    return (
      <Router history={customHistory} >
        <div className="App">
          <Header />
          <Route path="/register" component={Login} exact/>
          <Route path="/login" component={Login} exact/>
        </div>
      </Router>
    );
  }
}

export default App;

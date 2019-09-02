import React from 'react';
import './App.css';
import Login from './component/login/login'
import Header from './component/header/header'

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const customHistory = require('history').createHistory;

class App extends React.Component {
  render(){
    return (
      <Router history={customHistory} >
        <div className="App">
          <Header />
          <Switch>
              <Route path="/register" component={Login} exact/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import Login from './component/login/login'
import Header from './component/header/header'
import { createBrowserHistory } from 'history';


import { Router, Route, Switch } from 'react-router-dom'

const his=createBrowserHistory()

class App extends React.Component {
  render(){
    return (
      <Router history={his} >
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

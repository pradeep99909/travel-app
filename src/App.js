import React from 'react';
import './App.css';
import Login from './component/login/login'
import Header from './component/header/header'
import { Provider, Router, Route, Switch } from 'react-router-dom'

import history from './history'

class App extends React.Component {
  render(){
    return (
        <Router history={history} >
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

import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Login from './UI/Login'
import UserList from './UI/UserList'
export default class App extends Component {
  render(){
    return (
      <Router>
         <div className="App">
             <Route exact path="/" component={Login} />
             <div>
             <Route exact path="/userlist" component={UserList} />
             </div>
         </div>
      </Router>
     );
  }
 
}



import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import Business from './components/Business';
import Volunteer from './components/Volunteer';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
         <h1>REplate</h1>
         <Route path = "/login" component = {Login} />
         <Route path = "/register" component = {Register} />
         <PrivateRoute path = "/business" component ={Business} />
         <PrivateRoute path = "/volunteer" component = {Volunteer} />
       </Router>
      </div>
    );
  }
}

export default App;

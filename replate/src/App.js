import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import Business from './components/Business';
import BRequest from './components/BRequest';
import RequestForm from './components/RequestForm';
import Volunteer from './components/Volunteer';
import VRequest from './components/VRequest';
import Accepted from  './components/Accepted';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
         <h1>REplate</h1>
         <Route exact path = "/" component = {Login} />
         <Route path = "/register" component = {Register} />
         <PrivateRoute exact path = "/business" component ={Business} />
         <PrivateRoute path = "/business/:id" component ={BRequest} />
         <PrivateRoute path = "/request-form" component = {RequestForm} />
         <PrivateRoute exact path = "/volunteer" component = {Volunteer} />
         <PrivateRoute path = "/volunteer/:id" component ={VRequest} />
         <PrivateRoute path = "/accepted-requests" component ={Accepted} />
       </Router>
      </div>
    );
  }
}

export default App;

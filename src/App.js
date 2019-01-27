import React, { Component } from 'react';
//import logo from './logo.svg';
import './assets/css/bootstrap.css';
import './assets/css/bootstrap-responsive.css';
import './assets/css/application.css';

import AppHeader from './components/appheader';
import Home from './pages/home';
import Login from './pages/login';

class App extends Component {
  render() {
      return (
        <div>
              <AppHeader />
              <Home />
              <Login />
        </div>
    );
  }
}

//const App = ({ classes }) => (
//    <div>
//        <appheader />
//    </div>
//);

export default (App);

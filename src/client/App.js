import React, { Component } from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import './app.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

export default class App extends Component {

  render() {
    // const { username } = this.state;
    return (
      <main>
        <div>
          <Link to="/">Home </Link>
          {/* <Link to="/about">About Us </Link>
          <Link to="/contactus">Shop Now </Link> */}
        </div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contactus" component={Contact} />
        </Switch>
      </main>
    );
  }
}

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
import Header from './pages/Header';

export default class App extends Component {

  render() {
    // const { username } = this.state;
    return (
      <main>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contactus" component={Contact} />
        </Switch>
      </main>
    );
  }
}

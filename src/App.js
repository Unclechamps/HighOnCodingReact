import React, { Component } from 'react';
import {Menu} from './components/Menu.js'
import {Jumbotron} from './components/Jumbotron.js'
import {Article1} from './components/Article1.js'
import {Article2} from './components/Article2.js'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Jumbotron />
        <Article1 />
        <Article2 />
      </div>
    );
  }
}

export default App;

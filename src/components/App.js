import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import favicon from '../assets/favicon.ico';
import './App.css';
import Translator from './Translator'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Переводчик</h1>
        </header>
        <p className="App-intro"></p>
        <Translator />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from'./Person/Person';

class App extends Component {

state= {
  person: [
    {Name: 'Mrigank',}

  ]
};



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Person name="mrigank" age="50"></Person>
        <Person />
        <Person />
      </div>
    );
  }
}

export default App;

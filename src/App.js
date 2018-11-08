import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const raspiInfo = require('raspberry-info');

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            <MemAvail/>
          </a>
        </header>
      </div>
    );
  }
}

class MemAvail extends Component {
  constructor() {
    super();
    this.state = {
      memAvail: "Loading..."
    };
  }

  componentDidMount() {
    raspiInfo.getMemoryAvailable().then(memAvail => this.setState({memAvail}));

  }

  render() {
    return (<div>Memory available: {this.state.memAvail}</div>);
  }
}

export default App;

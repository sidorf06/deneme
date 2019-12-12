import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Test} from "./component/Test";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>{props.name}</h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Test name={props.name}>
        <Test name="İç test"/>
      </Test>
    </div>
  );
}

export default App;

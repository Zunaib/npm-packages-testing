import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from '@zunaib.imtiaz/react-npm-package';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Test className="test">
          Learn React
        </Test>
      </header>
    </div>
  );
}

export default App;

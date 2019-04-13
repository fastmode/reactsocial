import React, { Component } from 'react';
import './App.css';
import Facebook from './components/Facebook';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Facebook Auth</h1>
          <p>
            To get started, authenticate with Facebook.
          </p>
          <Facebook />
        </header>
      </div>
    );
  }
}

export default App;

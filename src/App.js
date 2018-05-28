import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PersistentDrawer from './PersistentDrawer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PersistentDrawer/>
      </div>
    );
  }
}

export default App;

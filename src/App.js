import React, { Component } from 'react';
import GetRecipes from "./Components/GetRecipes"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GetRecipes />
      </div>
    );
  }
}

export default App;

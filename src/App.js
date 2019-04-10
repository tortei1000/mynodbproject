import React, { Component } from 'react';
import Recipes from "./Components/Recipes"
import "./App.css"



class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={{borderBottom: '1px solid #d3d3d3'}}>
          <h1>Pantrify</h1>
        </header>
        <Recipes />
      </div>
    );
  }
}

export default App;

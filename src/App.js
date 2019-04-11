import React, { Component } from 'react';
import Recipes from "./Components/Recipes"
import Header from "./Components/Header"
import "./App.css"



class App extends Component {
  render() {
    return (
      <div className="App">
       
          
        <Recipes />
      </div>
    );
  }
}

export default App;

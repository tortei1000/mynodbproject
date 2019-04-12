import React, { Component } from 'react';
import Recipes from "./Components/Recipes"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import "./App.css"



class App extends Component {
  render() {
    return (
      <div className="App">
       
          
        <Recipes />
        <ToastContainer />
      </div>
    );
  }
}

export default App;

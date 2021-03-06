import React, { Component } from 'react';
import Recipes from "./Components/Recipes"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import "./App.css"
import Calendar from "./Components/Calendar"



class App extends Component {
  render() {
    return (
      <div className="App">
          
        <Recipes />
        <Calendar />
        <ToastContainer />
        
  
      </div>
    );
  }
}

export default App;

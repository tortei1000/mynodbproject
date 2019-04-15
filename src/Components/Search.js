import React, { Component } from 'react';
import "./Search.css"

export default class Search extends Component {
  constructor() {
    super();
    
    this.state = {
      filterText: '',
     
    };

  this.searchRecipe = this.searchRecipe.bind(this)  
  }
  
  
  searchRecipe(){
      
    this.props.searchRecipe(this.state.filterText)
    console.log("search method", this.state.filterText)
    
  };
  
  handleChange(e){
    this.setState({filterText:e.target.value})
    
   }
  render() {
    
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input onChange={(e)=>this.handleChange(e)} placeholder="Search Your Recipes" />
          
          <button className="searchbutton"  onClick={this.searchRecipe}><i className="fas fa-search"></i></button>
          
        </div>
        
      </section>
    )
  }
}
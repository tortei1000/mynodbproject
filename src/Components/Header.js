import React, { Component } from 'react';
import "./Header.css"
import logo from "./logo.png"


import Search from './Search';



export default class Header extends Component {
  render() {
    return (
      <div className="Header__parent">
        <section className="Header__content">

         
          <div className="Header__company-info">
            
            <span className="editHeader">
              <img src={logo} />
              <li className="myrecipes" onClick={() => this.props.navigate('recipes')}>My Recipes</li>
              <li className="shopping" onClick={() => this.props.navigate('cart')}>Shopping List</li>
              <li className="search">
              <Search searchRecipe={this.props.searchRecipe} 
                    recipes ={this.props.recipes} style={{}}/>
              </li>
            </span>
            
          </div>
         

        </section>
      </div>
    )
  }
}


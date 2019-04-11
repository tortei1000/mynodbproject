import React, { Component } from 'react';




import Search from './Search';



export default class Header extends Component {
  render() {
    return (
      <section className="Header__parent">
        <section className="Header__content">

          {/* Displays LOGO */}
          <div className="Header__company-info">
            
            <h1>Pantrify</h1>
          </div>

          {/* Displays the search bar */}
          <div className="Header__right">
            <Search searchRecipe={this.props.searchRecipe} 
                    recipes ={this.props.recipes}/>

            {/* Displays the profile icon */}
            <div className="Header__profile">
              
            </div>
          </div>

        </section>
      </section>
    )
  }
}


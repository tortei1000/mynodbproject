import React, { Component } from 'react';
import axios from "axios"
import AddRecipe from "./AddRecipe"
export default class GetRecipe extends Component {

  constructor() {
    super()
    this.state = {
      recipes: [],
      
    }
    this.addRecipe=this.addRecipe.bind(this)
  }
  
  componentDidMount() {
    axios.get('/api/recipes').then(results => {
      this.setState({ recipes: results.data })

    })
      .catch(err => console.log("ERROR"))
  }

  addRecipe(value){
    axios.post("/api/recipes", value).then(results => {
      this.setState({recipes:results.data})
    })
    .catch(err=> console.log("Error on put"))
  }

  render() {
    console.log("look", this.state.recipes)
    let newRecipes = this.state.recipes.length > 0 ? this.state.recipes.map((recipe) => {
      
      return (

        <div className="parentofAll">
          <h2 className="recipeName" key="recipe.name">Recipe name: {recipe.name}</h2>
          <div className="parentOfDetails">
            <p className="recipeId" key="recipe.id">Id:{recipe.id} </p>
            <img src={recipe.image} width="300px" height="280px" alt="not found"/>
            <p>Directions:{recipe.directions}</p>
            <h3>Ingredients:</h3>
          </div>
          {recipe.ingredient.map((ing)=>{
            return (  <li>{ing}</li> )
            
            
          })}
          

        </div>
      )
    }) : null

    
    return (
      <div>
        <AddRecipe recipes ={this.state.recipes} addRecipe={this.addRecipe} />
        {newRecipes}
      </div>
    )


  }
}
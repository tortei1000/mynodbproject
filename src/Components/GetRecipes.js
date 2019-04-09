import React, { Component } from 'react';
import axios from "axios"
import AddRecipe from "./AddRecipe"
export default class GetRecipe extends Component {

  constructor() {
    super()
    this.state = {
      recipes: []
    }
    this.addRecipe=this.addRecipe.bind(this)
  }
  
  componentDidMount() {
    axios.get('/api/recipes').then(results => {
      this.setState({ recipes: results.data })

    })
      .catch(err => console.log("ERROR"))
  }

  addRecipe(){
    axios.post("/api/recipes", this.state).then(results => {
      this.setState({recipes:results.data})
    })
    .catch(err=> console.log("Error on put"))
  }

  render() {
    console.log(this.state.recipes)
    let newRecipes = this.state.recipes.length > 0 ? this.state.recipes.map((recipe) => {
      
      return (

        <div className="parentofAll">
          <p className="recipeName" key="recipe.name">Recipe name: {recipe.name}</p>
          <div className="parentOfDetails">
            <p className="recipeId" key="recipe.id">Id:{recipe.id} </p>
            <img src={recipe.image} width="300px" height="280px" alt="not found"/>
            <p>Directions: {recipe.directions}</p>
          </div>

          {recipe.ingredient.map((ingredient) => {
            return (
              <div>
              <p className="ingredientList">{ingredient.name}</p>
              <p className="ingredientList">{ingredient.quantity}</p> 
              </div>
           )
          })
          }

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
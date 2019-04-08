import React, { Component } from 'react';
import axios from "axios"
export default class AddRecipe extends Component {

  constructor() {
    super()
    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    axios.get('/api/recipes').then(results => {
      console.log(results)
      this.setState({ recipes: results.data })

    })
      .catch(err => console.log("ERROR"))
  }


  render() {

    let newRecipes = this.state.recipes.length > 0 ? this.state.recipes.map((recipe) => {
      console.log(recipe)
      return (

        <div className="parentofAll">
          <p className="recipeName" key="recipe.name">Recipe name: {recipe.name}</p>
          <div className="parentOfDetails">
            <p className="recipeId" key="recipe.id">Id:{recipe.id} </p>
            <img src={recipe.image} />
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
        {newRecipes}
      </div>
    )


  }
}